import {Request, Response, request} from 'express'

/**
 * 라우트와 관련해 클래스마다 공통으로 사용하는 렌더링고 ㅏ같은 기능이 있는데 렌더링 메서드를 별도로 모아 클래스로 정의해 두면 유지 보수면에서 좋다. 
 */
export class BaseRoute {
  protected title: string
  private scripts: string[]

  constructor() {
    this.title = "타입스크립트 기반 서버"
  }

  public addScript(src: string): BaseRoute {
    this.scripts.push(src)
    return this
  }

  public render(req: Request, res: Response, view: string, options?: Object) {
    res.locals.BASE_URL = "/"

    res.locals.scripts = this.scripts

    res.locals.title = this.title
    res.render(view, options)
  }
}