const { envelope } = require('@totalsoft/message-bus')
const opentracing = require('opentracing')
const { useSpanManager } = require('../../../tracing/spanManager')
const { getExternalSpan } = require('../../../tracing/tracingUtils')

const tracing = () => async (ctx, next) => {
  const tracer = opentracing.globalTracer()

  const externalSpan = getExternalSpan(tracer, ctx.received.msg)
  const span = tracer.startSpan('messagingHost ' + ctx.received.topic, {
    childOf: externalSpan ? externalSpan : undefined
  })

  ctx.requestSpan = span
  span.log({ event: 'message', message: ctx.received.msg })

  const correlationId = ctx?.correlationId
  span.setTag(envelope.headers.correlationId, correlationId)

  await useSpanManager(span, async () => {
    await next()
  })

  span.finish()
}

module.exports = tracing
