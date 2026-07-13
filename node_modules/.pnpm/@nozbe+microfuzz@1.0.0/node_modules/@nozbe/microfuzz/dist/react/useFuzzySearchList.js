"use strict";

exports.__esModule = true;
exports["default"] = useFuzzySearchList;
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// @flow
/*:: import { type FuzzyResult, type FuzzySearchStrategy } from '../index';*/
/*:: export type UseFuzzySearchListOptions<T, U> = $Exact<{
  list: T[],
  key?: string,
  getText?: (T) => Array<?string>,
  queryText: string,
  mapResultItem: (FuzzyResult<T>) => U,
  strategy?: FuzzySearchStrategy,
}>*/
/**
 * Hook for fuzzy searching `list` against `queryText` and mapping the results with `mapResultItem`.
 *
 * If `queryText` is blank, `list` is returned in whole.
 *
 * See `createFuzzySearch` for more details. This hook simply wraps it (with memoization) in a React hook.
 *
 * For best performance, `getText` and `mapResultItem` functions should be memoized by the user.
 */
function useFuzzySearchList /*:: <T, U>*/(_ref /*:: */) /*: U[]*/{
  var list = _ref /*:: */.list,
    key = _ref /*:: */.key,
    getText = _ref /*:: */.getText,
    queryText = _ref /*:: */.queryText,
    mapResultItem = _ref /*:: */.mapResultItem,
    strategy = _ref /*:: */.strategy;
  var performSearch = _react["default"].useMemo(function () {
    return (0, _index["default"])(list, {
      key: key,
      getText: getText,
      strategy: strategy
    });
  }, [list, key, getText, strategy]);
  var searchResults = _react["default"].useMemo(function () {
    return queryText ? performSearch(queryText).map(mapResultItem) : list.map(function (item) {
      return mapResultItem({
        item: item,
        score: Number.POSITIVE_INFINITY,
        matches: []
      });
    });
  }, [list, mapResultItem, performSearch, queryText]);
  return searchResults;
}