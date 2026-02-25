import { route as ziggyRoute } from "ziggy-js";

export function route(name, params = {}, absolute = false) {
  return ziggyRoute(name, params, absolute, window.Ziggy);
}