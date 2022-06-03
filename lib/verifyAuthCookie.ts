import { NextPageContext } from "next"
import Router from "next/router"


async function verifyAuthCookie(url: string, ctx: NextPageContext) {
  const cookie = ctx.req?.headers.cookie
  const res = await fetch(url, {
    headers: {
      cookie: cookie!
    }
  })

  if(res.status === 401 && !ctx.req) {
    Router.reload()
    return
  }

  if(res.status === 401 && ctx.req) {
    ctx.res?.writeHead(302, {
      Location: 'http://localhost:3000'
    })
    ctx.res?.end()
    return
  }

  const json = await res.json()
  return json
}

export default verifyAuthCookie