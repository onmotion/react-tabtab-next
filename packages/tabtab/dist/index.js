'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var React = require('react');
var styled$1 = require('styled-components');
var invariant = require('invariant');
var ReactModal = require('react-modal');
var sortable = require('@dnd-kit/sortable');
var reactDom = require('react-dom');
var utilities = require('@dnd-kit/utilities');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled$1);
var invariant__default = /*#__PURE__*/_interopDefaultLegacy(invariant);
var ReactModal__default = /*#__PURE__*/_interopDefaultLegacy(ReactModal);

var Tabs = /** @class */ (function (_super) {
    tslib.__extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTabChange = _this.handleTabChange.bind(_this);
        _this.handleTabSequence = _this.handleTabSequence.bind(_this);
        _this.handleTabClose = _this.handleTabClose.bind(_this);
        _this.state = {
            activeIndex: _this.getActiveIndex(props),
        };
        return _this;
    }
    Tabs.prototype.getActiveIndex = function (props) {
        var defaultIndex = props.defaultIndex, activeIndex = props.activeIndex;
        if (activeIndex)
            return activeIndex;
        if (defaultIndex)
            return defaultIndex;
        return 0;
    };
    Tabs.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        if (prevProps.activeIndex !== this.props.activeIndex) {
            this.setState({ activeIndex: this.getActiveIndex(this.props) });
        }
    };
    Tabs.prototype.handleTabChange = function (index) {
        var _a = this.props, activeIndex = _a.activeIndex, onTabChange = _a.onTabChange;
        if (activeIndex !== 0 && !activeIndex) {
            this.setState({ activeIndex: index });
        }
        if (onTabChange) {
            onTabChange(index);
        }
    };
    Tabs.prototype.handleTabSequence = function (_a) {
        var oldIndex = _a.oldIndex, newIndex = _a.newIndex;
        var onTabSequenceChange = this.props.onTabSequenceChange;
        if (onTabSequenceChange) {
            onTabSequenceChange({ oldIndex: oldIndex, newIndex: newIndex });
        }
    };
    Tabs.prototype.handleTabClose = function (index) {
        var onTabClose = this.props.onTabClose;
        if (onTabClose) {
            onTabClose(index);
        }
    };
    Tabs.prototype.render = function () {
        var _a = this.props, children = _a.children, extraProps = tslib.__rest(_a, ["children"]);
        var activeIndex = this.state.activeIndex;
        var props = tslib.__assign({ handleTabChange: this.handleTabChange, handleTabSequence: this.handleTabSequence, handleTabClose: this.handleTabClose, activeIndex: activeIndex }, extraProps);
        return (React__default["default"].createElement("div", null, React__default["default"].Children.map(children, function (child) {
            return React__default["default"].cloneElement(child, props);
        })));
    };
    Tabs.defaultProps = {
        showModalButton: 4,
        showArrowButton: 'auto',
        onTabChange: function () { },
        onTabSequenceChange: function () { },
        customStyle: {
            TabList: null,
            Tab: null,
            Panel: null,
            ActionButton: null,
        },
    };
    return Tabs;
}(React__default["default"].PureComponent));

// The svg path is from react-icons: https://github.com/gorangajic/react-icons/
var Svg = function (_a) {
    var d = _a.d;
    return (React__default["default"].createElement("svg", { viewBox: "0 0 40 40", fill: "currentColor", height: "1em", width: "1em", style: { verticalAlign: "middle" } },
        React__default["default"].createElement("g", null,
            React__default["default"].createElement("path", { d: d }))));
};
var CloseIcon = function () { return (React__default["default"].createElement(Svg, { d: "m31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z" })); };
var LeftIcon = function () { return (React__default["default"].createElement(Svg, { d: "m25.7 12.3l-7.7 7.7 7.7 7.7-2.3 2.3-10-10 10-10z" })); };
var RightIcon = function () { return (React__default["default"].createElement(Svg, { d: "m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z" })); };
var BulletIcon = function () { return (React__default["default"].createElement(Svg, { d: "m31.7 28.3h-23.4c-1.8 0-3.3 1.5-3.3 3.4s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.4-3.3-3.4z m0-11.6h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3z m0-11.7h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.4 3.3 3.4h23.4c1.8 0 3.3-1.5 3.3-3.4s-1.5-3.3-3.3-3.3z" })); };

function isNumber(number) {
    return !isNaN(parseInt(number, 10));
}

ReactModal__default["default"].setAppElement('#root');
var Modal = styled__default["default"](ReactModal__default["default"])(templateObject_1$6 || (templateObject_1$6 = tslib.__makeTemplateObject(["\n    margin: auto;\n    background-color: #fff;\n    width: 200px;\n    padding: 20px;\n    margin-top: 40px;\n    border: 1px solid #00000022;\n"], ["\n    margin: auto;\n    background-color: #fff;\n    width: 200px;\n    padding: 20px;\n    margin-top: 40px;\n    border: 1px solid #00000022;\n"])));
var TabModal = /** @class */ (function (_super) {
    tslib.__extends(TabModal, _super);
    function TabModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabModal.prototype.render = function () {
        return (React__namespace.createElement(Modal, { isOpen: true, contentLabel: "Modal", onRequestClose: this.props.closeModal, className: "tabtab-modal" }, this.props.children));
    };
    return TabModal;
}(React__namespace.Component));
var templateObject_1$6;

var TabListElement = React.memo(function (_a) {
    _a.showArrowButton; _a.showModalButton; var props = tslib.__rest(_a, ["showArrowButton", "showModalButton"]);
    return React__namespace.createElement("div", tslib.__assign({}, props));
});

var buttonWidth = 35;
var getPadding = function (_a) {
    var showModalButton = _a.showModalButton, showArrowButton = _a.showArrowButton;
    var paddingLeft = 0;
    var paddingRight = 0;
    if (showModalButton) {
        paddingLeft += buttonWidth;
    }
    if (showArrowButton) {
        paddingLeft += buttonWidth;
        paddingRight += buttonWidth;
        if (showModalButton) {
            paddingLeft += 2;
        }
    }
    if (paddingLeft > 0) {
        paddingLeft += 3;
    }
    if (paddingRight > 0) {
        paddingRight += 3;
    }
    return "0 ".concat(paddingRight, "px 0 ").concat(paddingLeft, "px");
};
var TabListStyle = styled__default["default"](TabListElement)(templateObject_1$5 || (templateObject_1$5 = tslib.__makeTemplateObject(["\n    background-color: white;\n    text-align: left;\n    position: relative;\n    white-space: nowrap;\n    overflow: hidden;\n    width: auto;\n    padding: ", ";\n"], ["\n    background-color: white;\n    text-align: left;\n    position: relative;\n    white-space: nowrap;\n    overflow: hidden;\n    width: auto;\n    padding: ", ";\n"])), function (props) { return getPadding(props); });
var ListInner = styled__default["default"].div(templateObject_2$2 || (templateObject_2$2 = tslib.__makeTemplateObject(["\n    overflow: hidden;\n"], ["\n    overflow: hidden;\n"])));
var ListScroll = styled__default["default"].ul(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["\n    padding-left: 0;\n    position: relative;\n    margin: 0;\n    list-style: none;\n    display: inline-block;\n    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n    display: flex;\n"], ["\n    padding-left: 0;\n    position: relative;\n    margin: 0;\n    list-style: none;\n    display: inline-block;\n    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n    display: flex;\n"])));
var ActionButtonStyle = styled__default["default"].div(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["\n    height: 100%;\n    width: ", "px;\n    text-align: center;\n    border-radius: 4px 4px 0 0;\n    background: #f9f9f9;\n    color: #555;\n    :hover {\n        color: #000;\n    }\n    > svg {\n        padding-top: 11px;\n    }\n"], ["\n    height: 100%;\n    width: ", "px;\n    text-align: center;\n    border-radius: 4px 4px 0 0;\n    background: #f9f9f9;\n    color: #555;\n    :hover {\n        color: #000;\n    }\n    > svg {\n        padding-top: 11px;\n    }\n"])), buttonWidth);
var templateObject_1$5, templateObject_2$2, templateObject_3, templateObject_4;

const hiddenStyles = {
  display: 'none'
};
function HiddenText({
  id,
  value
}) {
  return React__default["default"].createElement("div", {
    id: id,
    style: hiddenStyles
  }, value);
}

const visuallyHidden = {
  position: 'absolute',
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(100%)',
  whiteSpace: 'nowrap'
};
function LiveRegion({
  id,
  announcement
}) {
  return React__default["default"].createElement("div", {
    id: id,
    style: visuallyHidden,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": true
  }, announcement);
}

function useAnnouncement() {
  const [announcement, setAnnouncement] = React.useState('');
  const announce = React.useCallback(value => {
    if (value != null) {
      setAnnouncement(value);
    }
  }, []);
  return {
    announce,
    announcement
  };
}

const screenReaderInstructions = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
};
const defaultAnnouncements = {
  onDragStart(id) {
    return `Picked up draggable item ${id}.`;
  },

  onDragOver(id, overId) {
    if (overId) {
      return `Draggable item ${id} was moved over droppable area ${overId}.`;
    }

    return `Draggable item ${id} is no longer over a droppable area.`;
  },

  onDragEnd(id, overId) {
    if (overId) {
      return `Draggable item ${id} was dropped over droppable area ${overId}`;
    }

    return `Draggable item ${id} was dropped.`;
  },

  onDragCancel(id) {
    return `Dragging was cancelled. Draggable item ${id} was dropped.`;
  }

};

var Action;

(function (Action) {
  Action["DragStart"] = "dragStart";
  Action["DragMove"] = "dragMove";
  Action["DragEnd"] = "dragEnd";
  Action["DragCancel"] = "dragCancel";
  Action["DragOver"] = "dragOver";
  Action["RegisterDroppable"] = "registerDroppable";
  Action["SetDroppableDisabled"] = "setDroppableDisabled";
  Action["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));

function noop(..._args) {}

class DroppableContainersMap extends Map {
  get(id) {
    var _super$get;

    return id != null ? (_super$get = super.get(id)) != null ? _super$get : undefined : undefined;
  }

  toArray() {
    return Array.from(this.values());
  }

  getEnabled() {
    return this.toArray().filter(({
      disabled
    }) => !disabled);
  }

  getNodeFor(id) {
    var _this$get$node$curren, _this$get;

    return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : undefined;
  }

}

const defaultPublicContext = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: {},
  droppableRects: /*#__PURE__*/new Map(),
  droppableContainers: /*#__PURE__*/new DroppableContainersMap(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: noop
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measureDroppableContainers: noop,
  windowRect: null,
  measuringScheduled: false
};
const defaultInternalContext = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ''
  },
  dispatch: noop,
  draggableNodes: {},
  over: null,
  measureDroppableContainers: noop
};
const InternalContext = /*#__PURE__*/React.createContext(defaultInternalContext);
const PublicContext = /*#__PURE__*/React.createContext(defaultPublicContext);

function getInitialState() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: {},
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new DroppableContainersMap()
    }
  };
}
function reducer(state, action) {
  switch (action.type) {
    case Action.DragStart:
      return { ...state,
        draggable: { ...state.draggable,
          initialCoordinates: action.initialCoordinates,
          active: action.active
        }
      };

    case Action.DragMove:
      if (!state.draggable.active) {
        return state;
      }

      return { ...state,
        draggable: { ...state.draggable,
          translate: {
            x: action.coordinates.x - state.draggable.initialCoordinates.x,
            y: action.coordinates.y - state.draggable.initialCoordinates.y
          }
        }
      };

    case Action.DragEnd:
    case Action.DragCancel:
      return { ...state,
        draggable: { ...state.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };

    case Action.RegisterDroppable:
      {
        const {
          element
        } = action;
        const {
          id
        } = element;
        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.set(id, element);
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    case Action.SetDroppableDisabled:
      {
        const {
          id,
          key,
          disabled
        } = action;
        const element = state.droppable.containers.get(id);

        if (!element || key !== element.key) {
          return state;
        }

        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.set(id, { ...element,
          disabled
        });
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    case Action.UnregisterDroppable:
      {
        const {
          id,
          key
        } = action;
        const element = state.droppable.containers.get(id);

        if (!element || key !== element.key) {
          return state;
        }

        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.delete(id);
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    default:
      {
        return state;
      }
  }
}

const DndMonitorContext = /*#__PURE__*/React.createContext({
  type: null,
  event: null
});
function useDndMonitor({
  onDragStart,
  onDragMove,
  onDragOver,
  onDragEnd,
  onDragCancel
}) {
  const monitorState = React.useContext(DndMonitorContext);
  const previousMonitorState = React.useRef(monitorState);
  React.useEffect(() => {
    if (monitorState !== previousMonitorState.current) {
      const {
        type,
        event
      } = monitorState;

      switch (type) {
        case Action.DragStart:
          onDragStart == null ? void 0 : onDragStart(event);
          break;

        case Action.DragMove:
          onDragMove == null ? void 0 : onDragMove(event);
          break;

        case Action.DragOver:
          onDragOver == null ? void 0 : onDragOver(event);
          break;

        case Action.DragCancel:
          onDragCancel == null ? void 0 : onDragCancel(event);
          break;

        case Action.DragEnd:
          onDragEnd == null ? void 0 : onDragEnd(event);
          break;
      }

      previousMonitorState.current = monitorState;
    }
  }, [monitorState, onDragStart, onDragMove, onDragOver, onDragEnd, onDragCancel]);
}

function Accessibility({
  announcements = defaultAnnouncements,
  hiddenTextDescribedById,
  screenReaderInstructions
}) {
  const {
    announce,
    announcement
  } = useAnnouncement();
  const liveRegionId = utilities.useUniqueId(`DndLiveRegion`);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  useDndMonitor(React.useMemo(() => ({
    onDragStart({
      active
    }) {
      announce(announcements.onDragStart(active.id));
    },

    onDragMove({
      active,
      over
    }) {
      if (announcements.onDragMove) {
        announce(announcements.onDragMove(active.id, over == null ? void 0 : over.id));
      }
    },

    onDragOver({
      active,
      over
    }) {
      announce(announcements.onDragOver(active.id, over == null ? void 0 : over.id));
    },

    onDragEnd({
      active,
      over
    }) {
      announce(announcements.onDragEnd(active.id, over == null ? void 0 : over.id));
    },

    onDragCancel({
      active
    }) {
      announce(announcements.onDragCancel(active.id));
    }

  }), [announce, announcements]));
  return mounted ? reactDom.createPortal(React__default["default"].createElement(React__default["default"].Fragment, null, React__default["default"].createElement(HiddenText, {
    id: hiddenTextDescribedById,
    value: screenReaderInstructions.draggable
  }), React__default["default"].createElement(LiveRegion, {
    id: liveRegionId,
    announcement: announcement
  })), document.body) : null;
}

const defaultCoordinates = /*#__PURE__*/Object.freeze({
  x: 0,
  y: 0
});
/**
 * Sort collisions from greatest to smallest value
 */

function sortCollisionsDesc({
  data: {
    value: a
  }
}, {
  data: {
    value: b
  }
}) {
  return b - a;
}
function getFirstCollision(collisions, property) {
  if (!collisions || collisions.length === 0) {
    return null;
  }

  const [firstCollision] = collisions;
  return property ? firstCollision[property] : firstCollision;
}

/**
 * Returns the intersecting rectangle area between two rectangles
 */

function getIntersectionRatio(entry, target) {
  const top = Math.max(target.top, entry.top);
  const left = Math.max(target.left, entry.left);
  const right = Math.min(target.left + target.width, entry.left + entry.width);
  const bottom = Math.min(target.top + target.height, entry.top + entry.height);
  const width = right - left;
  const height = bottom - top;

  if (left < right && top < bottom) {
    const targetArea = target.width * target.height;
    const entryArea = entry.width * entry.height;
    const intersectionArea = width * height;
    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  } // Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)


  return 0;
}
/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */

const rectIntersection = ({
  collisionRect,
  droppableContainers
}) => {
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id,
      rect: {
        current: rect
      }
    } = droppableContainer;

    if (rect) {
      const intersectionRatio = getIntersectionRatio(rect, collisionRect);

      if (intersectionRatio > 0) {
        collisions.push({
          id,
          data: {
            droppableContainer,
            value: intersectionRatio
          }
        });
      }
    }
  }

  return collisions.sort(sortCollisionsDesc);
};

function adjustScale(transform, rect1, rect2) {
  return { ...transform,
    scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
    scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
  };
}

function getRectDelta(rect1, rect2) {
  return rect1 && rect2 ? {
    x: rect1.left - rect2.left,
    y: rect1.top - rect2.top
  } : defaultCoordinates;
}

function createRectAdjustmentFn(modifier) {
  return function adjustClientRect(rect, ...adjustments) {
    return adjustments.reduce((acc, adjustment) => ({ ...acc,
      top: acc.top + modifier * adjustment.y,
      bottom: acc.bottom + modifier * adjustment.y,
      left: acc.left + modifier * adjustment.x,
      right: acc.right + modifier * adjustment.x
    }), { ...rect
    });
  };
}
const getAdjustedRect = /*#__PURE__*/createRectAdjustmentFn(1);

function inverseTransform(rect, transform, transformOrigin) {
  let ta, sx, sy, dx, dy;

  if (transform.startsWith('matrix3d(')) {
    ta = transform.slice(9, -1).split(/, /);
    sx = +ta[0];
    sy = +ta[5];
    dx = +ta[12];
    dy = +ta[13];
  } else if (transform.startsWith('matrix(')) {
    ta = transform.slice(7, -1).split(/, /);
    sx = +ta[0];
    sy = +ta[3];
    dx = +ta[4];
    dy = +ta[5];
  } else {
    return rect;
  }

  const x = rect.left - dx - (1 - sx) * parseFloat(transformOrigin);
  const y = rect.top - dy - (1 - sy) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(' ') + 1));
  const w = sx ? rect.width / sx : rect.width;
  const h = sy ? rect.height / sy : rect.height;
  return {
    width: w,
    height: h,
    top: y,
    right: x + w,
    bottom: y + h,
    left: x
  };
}

const defaultOptions = {
  ignoreTransform: false
};
/**
 * Returns the bounding client rect of an element relative to the viewport.
 */

function getClientRect(element, options = defaultOptions) {
  let rect = element.getBoundingClientRect();

  if (options.ignoreTransform) {
    const {
      getComputedStyle
    } = utilities.getWindow(element);
    const {
      transform,
      transformOrigin
    } = getComputedStyle(element);

    if (transform) {
      rect = inverseTransform(rect, transform, transformOrigin);
    }
  }

  const {
    top,
    left,
    width,
    height,
    bottom,
    right
  } = rect;
  return {
    top,
    left,
    width,
    height,
    bottom,
    right
  };
}
/**
 * Returns the bounding client rect of an element relative to the viewport.
 *
 * @remarks
 * The ClientRect returned by this method does not take into account transforms
 * applied to the element it measures.
 *
 */

function getTransformAgnosticClientRect(element) {
  return getClientRect(element, {
    ignoreTransform: true
  });
}

function getWindowClientRect(element) {
  const width = element.innerWidth;
  const height = element.innerHeight;
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  };
}

function isFixed(node, computedStyle = utilities.getWindow(node).getComputedStyle(node)) {
  return computedStyle.position === 'fixed';
}

function isScrollable(element, computedStyle = utilities.getWindow(element).getComputedStyle(element)) {
  const overflowRegex = /(auto|scroll|overlay)/;
  const properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.find(property => {
    const value = computedStyle[property];
    return typeof value === 'string' ? overflowRegex.test(value) : false;
  }) != null;
}

function getScrollableAncestors(element) {
  const scrollParents = [];

  function findScrollableAncestors(node) {
    if (!node) {
      return scrollParents;
    }

    if (utilities.isDocument(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
      scrollParents.push(node.scrollingElement);
      return scrollParents;
    }

    if (!utilities.isHTMLElement(node) || utilities.isSVGElement(node)) {
      return scrollParents;
    }

    if (scrollParents.includes(node)) {
      return scrollParents;
    }

    const {
      getComputedStyle
    } = utilities.getWindow(node);
    const computedStyle = getComputedStyle(node);

    if (node !== element) {
      if (isScrollable(node, computedStyle)) {
        scrollParents.push(node);
      }
    }

    if (isFixed(node, computedStyle)) {
      return scrollParents;
    }

    return findScrollableAncestors(node.parentNode);
  }

  if (!element) {
    return scrollParents;
  }

  return findScrollableAncestors(element);
}

function getScrollableElement(element) {
  if (!utilities.canUseDOM || !element) {
    return null;
  }

  if (utilities.isWindow(element)) {
    return element;
  }

  if (!utilities.isNode(element)) {
    return null;
  }

  if (utilities.isDocument(element) || element === utilities.getOwnerDocument(element).scrollingElement) {
    return window;
  }

  if (utilities.isHTMLElement(element)) {
    return element;
  }

  return null;
}

function getScrollXCoordinate(element) {
  if (utilities.isWindow(element)) {
    return element.scrollX;
  }

  return element.scrollLeft;
}
function getScrollYCoordinate(element) {
  if (utilities.isWindow(element)) {
    return element.scrollY;
  }

  return element.scrollTop;
}
function getScrollCoordinates(element) {
  return {
    x: getScrollXCoordinate(element),
    y: getScrollYCoordinate(element)
  };
}

var Direction;

(function (Direction) {
  Direction[Direction["Forward"] = 1] = "Forward";
  Direction[Direction["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));

function getScrollPosition(scrollingContainer) {
  const minScroll = {
    x: 0,
    y: 0
  };
  const maxScroll = {
    x: scrollingContainer.scrollWidth - scrollingContainer.clientWidth,
    y: scrollingContainer.scrollHeight - scrollingContainer.clientHeight
  };
  const isTop = scrollingContainer.scrollTop <= minScroll.y;
  const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
  const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
  const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
  return {
    isTop,
    isLeft,
    isBottom,
    isRight,
    maxScroll,
    minScroll
  };
}

function isDocumentScrollingElement(element) {
  if (!utilities.canUseDOM || !element) {
    return false;
  }

  return element === document.scrollingElement;
}

const defaultThreshold = {
  x: 0.2,
  y: 0.2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, {
  top,
  left,
  right,
  bottom
}, acceleration = 10, thresholdPercentage = defaultThreshold) {
  const {
    clientHeight,
    clientWidth
  } = scrollContainer;
  const finalScrollContainerRect = isDocumentScrollingElement(scrollContainer) ? {
    top: 0,
    left: 0,
    right: clientWidth,
    bottom: clientHeight,
    width: clientWidth,
    height: clientHeight
  } : scrollContainerRect;
  const {
    isTop,
    isBottom,
    isLeft,
    isRight
  } = getScrollPosition(scrollContainer);
  const direction = {
    x: 0,
    y: 0
  };
  const speed = {
    x: 0,
    y: 0
  };
  const threshold = {
    height: finalScrollContainerRect.height * thresholdPercentage.y,
    width: finalScrollContainerRect.width * thresholdPercentage.x
  };

  if (!isTop && top <= finalScrollContainerRect.top + threshold.height) {
    // Scroll Up
    direction.y = Direction.Backward;
    speed.y = acceleration * Math.abs((finalScrollContainerRect.top + threshold.height - top) / threshold.height);
  } else if (!isBottom && bottom >= finalScrollContainerRect.bottom - threshold.height) {
    // Scroll Down
    direction.y = Direction.Forward;
    speed.y = acceleration * Math.abs((finalScrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
  }

  if (!isRight && right >= finalScrollContainerRect.right - threshold.width) {
    // Scroll Right
    direction.x = Direction.Forward;
    speed.x = acceleration * Math.abs((finalScrollContainerRect.right - threshold.width - right) / threshold.width);
  } else if (!isLeft && left <= finalScrollContainerRect.left + threshold.width) {
    // Scroll Left
    direction.x = Direction.Backward;
    speed.x = acceleration * Math.abs((finalScrollContainerRect.left + threshold.width - left) / threshold.width);
  }

  return {
    direction,
    speed
  };
}

function getScrollElementRect(element) {
  if (element === document.scrollingElement) {
    const {
      innerWidth,
      innerHeight
    } = window;
    return {
      top: 0,
      left: 0,
      right: innerWidth,
      bottom: innerHeight,
      width: innerWidth,
      height: innerHeight
    };
  }

  const {
    top,
    left,
    right,
    bottom
  } = element.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getScrollOffsets(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return utilities.add(acc, getScrollCoordinates(node));
  }, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollXCoordinate(node);
  }, 0);
}
function getScrollYOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollYCoordinate(node);
  }, 0);
}

const properties = [['x', ['left', 'right'], getScrollXOffset], ['y', ['top', 'bottom'], getScrollYOffset]];
class Rect {
  constructor(rect, element) {
    this.rect = void 0;
    this.width = void 0;
    this.height = void 0;
    this.top = void 0;
    this.bottom = void 0;
    this.right = void 0;
    this.left = void 0;
    const scrollableAncestors = getScrollableAncestors(element);
    const scrollOffsets = getScrollOffsets(scrollableAncestors);
    this.rect = { ...rect
    };
    this.width = rect.width;
    this.height = rect.height;

    for (const [axis, keys, getScrollOffset] of properties) {
      for (const key of keys) {
        Object.defineProperty(this, key, {
          get: () => {
            const currentOffsets = getScrollOffset(scrollableAncestors);
            const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
            return this.rect[key] + scrollOffsetsDeltla;
          },
          enumerable: true
        });
      }
    }

    Object.defineProperty(this, 'rect', {
      enumerable: false
    });
  }

}

var AutoScrollActivator;

(function (AutoScrollActivator) {
  AutoScrollActivator[AutoScrollActivator["Pointer"] = 0] = "Pointer";
  AutoScrollActivator[AutoScrollActivator["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));

var TraversalOrder;

(function (TraversalOrder) {
  TraversalOrder[TraversalOrder["TreeOrder"] = 0] = "TreeOrder";
  TraversalOrder[TraversalOrder["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));

function useAutoScroller({
  acceleration,
  activator = AutoScrollActivator.Pointer,
  canScroll,
  draggingRect,
  enabled,
  interval = 5,
  order = TraversalOrder.TreeOrder,
  pointerCoordinates,
  scrollableAncestors,
  scrollableAncestorRects,
  threshold
}) {
  const [setAutoScrollInterval, clearAutoScrollInterval] = utilities.useInterval();
  const scrollSpeed = React.useRef({
    x: 1,
    y: 1
  });
  const rect = React.useMemo(() => {
    switch (activator) {
      case AutoScrollActivator.Pointer:
        return pointerCoordinates ? {
          top: pointerCoordinates.y,
          bottom: pointerCoordinates.y,
          left: pointerCoordinates.x,
          right: pointerCoordinates.x
        } : null;

      case AutoScrollActivator.DraggableRect:
        return draggingRect;
    }

    return null;
  }, [activator, draggingRect, pointerCoordinates]);
  const scrollDirection = React.useRef(defaultCoordinates);
  const scrollContainerRef = React.useRef(null);
  const autoScroll = React.useCallback(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
    const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
    scrollContainer.scrollBy(scrollLeft, scrollTop);
  }, []);
  const sortedScrollableAncestors = React.useMemo(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
  React.useEffect(() => {
    if (!enabled || !scrollableAncestors.length || !rect) {
      clearAutoScrollInterval();
      return;
    }

    for (const scrollContainer of sortedScrollableAncestors) {
      if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) {
        continue;
      }

      const index = scrollableAncestors.indexOf(scrollContainer);
      const scrollContainerRect = scrollableAncestorRects[index];

      if (!scrollContainerRect) {
        continue;
      }

      const {
        direction,
        speed
      } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);

      if (speed.x > 0 || speed.y > 0) {
        clearAutoScrollInterval();
        scrollContainerRef.current = scrollContainer;
        setAutoScrollInterval(autoScroll, interval);
        scrollSpeed.current = speed;
        scrollDirection.current = direction;
        return;
      }
    }

    scrollSpeed.current = {
      x: 0,
      y: 0
    };
    scrollDirection.current = {
      x: 0,
      y: 0
    };
    clearAutoScrollInterval();
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [acceleration, autoScroll, canScroll, clearAutoScrollInterval, enabled, interval, // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(rect), setAutoScrollInterval, scrollableAncestors, sortedScrollableAncestors, scrollableAncestorRects, // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(threshold)]);
}

function useCachedNode(draggableNodes, id) {
  const draggableNode = id !== null ? draggableNodes[id] : undefined;
  const node = draggableNode ? draggableNode.node.current : null;
  return utilities.useLazyMemo(cachedNode => {
    var _ref;

    if (id === null) {
      return null;
    } // In some cases, the draggable node can unmount while dragging
    // This is the case for virtualized lists. In those situations,
    // we fall back to the last known value for that node.


    return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
  }, [node, id]);
}

function useCombineActivators(sensors, getSyntheticHandler) {
  return React.useMemo(() => sensors.reduce((accumulator, sensor) => {
    const {
      sensor: Sensor
    } = sensor;
    const sensorActivators = Sensor.activators.map(activator => ({
      eventName: activator.eventName,
      handler: getSyntheticHandler(activator.handler, sensor)
    }));
    return [...accumulator, ...sensorActivators];
  }, []), [sensors, getSyntheticHandler]);
}

var MeasuringStrategy;

(function (MeasuringStrategy) {
  MeasuringStrategy[MeasuringStrategy["Always"] = 0] = "Always";
  MeasuringStrategy[MeasuringStrategy["BeforeDragging"] = 1] = "BeforeDragging";
  MeasuringStrategy[MeasuringStrategy["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));

var MeasuringFrequency;

(function (MeasuringFrequency) {
  MeasuringFrequency["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));

const defaultValue = /*#__PURE__*/new Map();
const defaultConfig = {
  measure: getTransformAgnosticClientRect,
  strategy: MeasuringStrategy.WhileDragging,
  frequency: MeasuringFrequency.Optimized
};
function useDroppableMeasuring(containers, {
  dragging,
  dependencies,
  config
}) {
  const [containerIdsScheduledForMeasurement, setContainerIdsScheduledForMeasurement] = React.useState(null);
  const measuringScheduled = containerIdsScheduledForMeasurement != null;
  const {
    frequency,
    measure,
    strategy
  } = { ...defaultConfig,
    ...config
  };
  const containersRef = React.useRef(containers);
  const measureDroppableContainers = React.useCallback((ids = []) => setContainerIdsScheduledForMeasurement(value => value ? value.concat(ids) : ids), []);
  const timeoutId = React.useRef(null);
  const disabled = isDisabled();
  const droppableRects = utilities.useLazyMemo(previousValue => {
    if (disabled && !dragging) {
      return defaultValue;
    }

    const ids = containerIdsScheduledForMeasurement;

    if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || ids != null) {
      const map = new Map();

      for (let container of containers) {
        if (!container) {
          continue;
        }

        if (ids && ids.length > 0 && !ids.includes(container.id) && container.rect.current) {
          // This container does not need to be re-measured
          map.set(container.id, container.rect.current);
          continue;
        }

        const node = container.node.current;
        const rect = node ? new Rect(measure(node), node) : null;
        container.rect.current = rect;

        if (rect) {
          map.set(container.id, rect);
        }
      }

      return map;
    }

    return previousValue;
  }, [containers, containerIdsScheduledForMeasurement, dragging, disabled, measure]);
  React.useEffect(() => {
    containersRef.current = containers;
  }, [containers]);
  React.useEffect(() => {
    if (disabled) {
      return;
    }

    requestAnimationFrame(() => measureDroppableContainers());
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [dragging, disabled]);
  React.useEffect(() => {
    if (measuringScheduled) {
      setContainerIdsScheduledForMeasurement(null);
    }
  }, [measuringScheduled]);
  React.useEffect(() => {
    if (disabled || typeof frequency !== 'number' || timeoutId.current !== null) {
      return;
    }

    timeoutId.current = setTimeout(() => {
      measureDroppableContainers();
      timeoutId.current = null;
    }, frequency);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [frequency, disabled, measureDroppableContainers, ...dependencies]);
  return {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled
  };

  function isDisabled() {
    switch (strategy) {
      case MeasuringStrategy.Always:
        return false;

      case MeasuringStrategy.BeforeDragging:
        return dragging;

      default:
        return !dragging;
    }
  }
}

/**
 * Returns a new ResizeObserver instance bound to the `onResize` callback.
 * If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
 */

function useResizeObserver({
  onResize,
  disabled
}) {
  const resizeObserver = React.useMemo(() => {
    if (disabled || typeof window === 'undefined' || typeof window.ResizeObserver === 'undefined') {
      return undefined;
    }

    const {
      ResizeObserver
    } = window;
    return new ResizeObserver(onResize);
  }, [disabled, onResize]);
  React.useEffect(() => {
    return () => resizeObserver == null ? void 0 : resizeObserver.disconnect();
  }, [resizeObserver]);
  return resizeObserver;
}

function useScrollOffsets(elements) {
  const [scrollCoordinates, setScrollCoordinates] = React.useState(null);
  const prevElements = React.useRef(elements); // To-do: Throttle the handleScroll callback

  const handleScroll = React.useCallback(event => {
    const scrollingElement = getScrollableElement(event.target);

    if (!scrollingElement) {
      return;
    }

    setScrollCoordinates(scrollCoordinates => {
      if (!scrollCoordinates) {
        return null;
      }

      scrollCoordinates.set(scrollingElement, getScrollCoordinates(scrollingElement));
      return new Map(scrollCoordinates);
    });
  }, []);
  React.useEffect(() => {
    const previousElements = prevElements.current;

    if (elements !== previousElements) {
      cleanup(previousElements);
      const entries = elements.map(element => {
        const scrollableElement = getScrollableElement(element);

        if (scrollableElement) {
          scrollableElement.addEventListener('scroll', handleScroll, {
            passive: true
          });
          return [scrollableElement, getScrollCoordinates(scrollableElement)];
        }

        return null;
      }).filter(entry => entry != null);
      setScrollCoordinates(entries.length ? new Map(entries) : null);
      prevElements.current = elements;
    }

    return () => {
      cleanup(elements);
      cleanup(previousElements);
    };

    function cleanup(elements) {
      elements.forEach(element => {
        const scrollableElement = getScrollableElement(element);
        scrollableElement == null ? void 0 : scrollableElement.removeEventListener('scroll', handleScroll);
      });
    }
  }, [handleScroll, elements]);
  return React.useMemo(() => {
    if (elements.length) {
      return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => utilities.add(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
    }

    return defaultCoordinates;
  }, [elements, scrollCoordinates]);
}

const defaultValue$1 = [];
function useScrollableAncestors(node) {
  const previousNode = React.useRef(node);
  const ancestors = utilities.useLazyMemo(previousValue => {
    if (!node) {
      return defaultValue$1;
    }

    if (previousValue && node && previousNode.current && node.parentNode === previousNode.current.parentNode) {
      return previousValue;
    }

    return getScrollableAncestors(node);
  }, [node]);
  React.useEffect(() => {
    previousNode.current = node;
  }, [node]);
  return ancestors;
}

function useSensorSetup(sensors) {
  React.useEffect(() => {
    if (!utilities.canUseDOM) {
      return;
    }

    const teardownFns = sensors.map(({
      sensor
    }) => sensor.setup == null ? void 0 : sensor.setup());
    return () => {
      for (const teardown of teardownFns) {
        teardown == null ? void 0 : teardown();
      }
    };
  }, // TO-DO: Sensors length could theoretically change which would not be a valid dependency
  // eslint-disable-next-line react-hooks/exhaustive-deps
  sensors.map(({
    sensor
  }) => sensor));
}

const useClientRect = /*#__PURE__*/createUseRectFn(getTransformAgnosticClientRect);
const useClientRects = /*#__PURE__*/createUseRectsFn(getTransformAgnosticClientRect);
function useRect(element, getRect, forceRecompute) {
  const previousElement = React.useRef(element);
  return utilities.useLazyMemo(previousValue => {
    if (!element) {
      return null;
    }

    if (forceRecompute || !previousValue && element || element !== previousElement.current) {
      if (utilities.isHTMLElement(element) && element.parentNode == null) {
        return null;
      }

      return new Rect(getRect(element), element);
    }

    return previousValue != null ? previousValue : null;
  }, [element, forceRecompute, getRect]);
}
function createUseRectFn(getRect) {
  return (element, forceRecompute) => useRect(element, getRect, forceRecompute);
}

function createUseRectsFn(getRect) {
  const defaultValue = [];
  return function useRects(elements, forceRecompute) {
    const previousElements = React.useRef(elements);
    return utilities.useLazyMemo(previousValue => {
      if (!elements.length) {
        return defaultValue;
      }

      if (forceRecompute || !previousValue && elements.length || elements !== previousElements.current) {
        return elements.map(element => new Rect(getRect(element), element));
      }

      return previousValue != null ? previousValue : defaultValue;
    }, [elements, forceRecompute]);
  };
}

function useWindowRect(element) {
  return React.useMemo(() => element ? getWindowClientRect(element) : null, [element]);
}

function getMeasurableNode(node) {
  if (!node) {
    return null;
  }

  if (node.children.length > 1) {
    return node;
  }

  const firstChild = node.children[0];
  return utilities.isHTMLElement(firstChild) ? firstChild : node;
}

function useDragOverlayMeasuring({
  measure = getClientRect
}) {
  const [rect, setRect] = React.useState(null);
  const handleResize = React.useCallback(entries => {
    for (const {
      target
    } of entries) {
      if (utilities.isHTMLElement(target)) {
        setRect(rect => {
          const newRect = measure(target);
          return rect ? { ...rect,
            width: newRect.width,
            height: newRect.height
          } : newRect;
        });
        break;
      }
    }
  }, [measure]);
  const resizeObserver = useResizeObserver({
    onResize: handleResize
  });
  const handleNodeChange = React.useCallback(element => {
    const node = getMeasurableNode(element);
    resizeObserver == null ? void 0 : resizeObserver.disconnect();

    if (node) {
      resizeObserver == null ? void 0 : resizeObserver.observe(node);
    }

    setRect(node ? measure(node) : null);
  }, [measure, resizeObserver]);
  const [nodeRef, setRef] = utilities.useNodeRef(handleNodeChange);
  return React.useMemo(() => ({
    nodeRef,
    rect,
    setRef
  }), [rect, nodeRef, setRef]);
}

function useSensor(sensor, options) {
  return React.useMemo(() => ({
    sensor,
    options: options != null ? options : {}
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [sensor, options]);
}

function useSensors(...sensors) {
  return React.useMemo(() => [...sensors].filter(sensor => sensor != null), // eslint-disable-next-line react-hooks/exhaustive-deps
  [...sensors]);
}

class Listeners {
  constructor(target) {
    this.target = void 0;
    this.listeners = [];

    this.removeAll = () => {
      this.listeners.forEach(listener => {
        var _this$target;

        return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
      });
    };

    this.target = target;
  }

  add(eventName, handler, options) {
    var _this$target2;

    (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
    this.listeners.push([eventName, handler, options]);
  }

}

function getEventListenerTarget(target) {
  // If the `event.target` element is removed from the document events will still be targeted
  // at it, and hence won't always bubble up to the window or document anymore.
  // If there is any risk of an element being removed while it is being dragged,
  // the best practice is to attach the event listeners directly to the target.
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
  const {
    EventTarget
  } = utilities.getWindow(target);
  return target instanceof EventTarget ? target : utilities.getOwnerDocument(target);
}

function hasExceededDistance(delta, measurement) {
  const dx = Math.abs(delta.x);
  const dy = Math.abs(delta.y);

  if (typeof measurement === 'number') {
    return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
  }

  if ('x' in measurement && 'y' in measurement) {
    return dx > measurement.x && dy > measurement.y;
  }

  if ('x' in measurement) {
    return dx > measurement.x;
  }

  if ('y' in measurement) {
    return dy > measurement.y;
  }

  return false;
}

var EventName;

(function (EventName) {
  EventName["Click"] = "click";
  EventName["DragStart"] = "dragstart";
  EventName["Keydown"] = "keydown";
  EventName["ContextMenu"] = "contextmenu";
  EventName["Resize"] = "resize";
  EventName["SelectionChange"] = "selectionchange";
  EventName["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));

function preventDefault(event) {
  event.preventDefault();
}
function stopPropagation(event) {
  event.stopPropagation();
}

var KeyboardCode;

(function (KeyboardCode) {
  KeyboardCode["Space"] = "Space";
  KeyboardCode["Down"] = "ArrowDown";
  KeyboardCode["Right"] = "ArrowRight";
  KeyboardCode["Left"] = "ArrowLeft";
  KeyboardCode["Up"] = "ArrowUp";
  KeyboardCode["Esc"] = "Escape";
  KeyboardCode["Enter"] = "Enter";
})(KeyboardCode || (KeyboardCode = {}));

const defaultKeyboardCodes = {
  start: [KeyboardCode.Space, KeyboardCode.Enter],
  cancel: [KeyboardCode.Esc],
  end: [KeyboardCode.Space, KeyboardCode.Enter]
};
const defaultKeyboardCoordinateGetter = (event, {
  currentCoordinates
}) => {
  switch (event.code) {
    case KeyboardCode.Right:
      return { ...currentCoordinates,
        x: currentCoordinates.x + 25
      };

    case KeyboardCode.Left:
      return { ...currentCoordinates,
        x: currentCoordinates.x - 25
      };

    case KeyboardCode.Down:
      return { ...currentCoordinates,
        y: currentCoordinates.y + 25
      };

    case KeyboardCode.Up:
      return { ...currentCoordinates,
        y: currentCoordinates.y - 25
      };
  }

  return undefined;
};

class KeyboardSensor {
  constructor(props) {
    this.props = void 0;
    this.autoScrollEnabled = false;
    this.coordinates = defaultCoordinates;
    this.listeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    const {
      event: {
        target
      }
    } = props;
    this.props = props;
    this.listeners = new Listeners(utilities.getOwnerDocument(target));
    this.windowListeners = new Listeners(utilities.getWindow(target));
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.attach();
  }

  attach() {
    this.handleStart();
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
  }

  handleStart() {
    const {
      activeNode,
      onStart
    } = this.props;

    if (!activeNode.node.current) {
      throw new Error('Active draggable node is undefined');
    }

    const activeNodeRect = getTransformAgnosticClientRect(activeNode.node.current);
    const coordinates = {
      x: activeNodeRect.left,
      y: activeNodeRect.top
    };
    this.coordinates = coordinates;
    onStart(coordinates);
  }

  handleKeyDown(event) {
    if (utilities.isKeyboardEvent(event)) {
      const {
        coordinates
      } = this;
      const {
        active,
        context,
        options
      } = this.props;
      const {
        keyboardCodes = defaultKeyboardCodes,
        coordinateGetter = defaultKeyboardCoordinateGetter,
        scrollBehavior = 'smooth'
      } = options;
      const {
        code
      } = event;

      if (keyboardCodes.end.includes(code)) {
        this.handleEnd(event);
        return;
      }

      if (keyboardCodes.cancel.includes(code)) {
        this.handleCancel(event);
        return;
      }

      const newCoordinates = coordinateGetter(event, {
        active,
        context: context.current,
        currentCoordinates: coordinates
      });

      if (newCoordinates) {
        const scrollDelta = {
          x: 0,
          y: 0
        };
        const {
          scrollableAncestors
        } = context.current;

        for (const scrollContainer of scrollableAncestors) {
          const direction = event.code;
          const coordinatesDelta = utilities.subtract(newCoordinates, coordinates);
          const {
            isTop,
            isRight,
            isLeft,
            isBottom,
            maxScroll,
            minScroll
          } = getScrollPosition(scrollContainer);
          const scrollElementRect = getScrollElementRect(scrollContainer);
          const clampedCoordinates = {
            x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
            y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
          };
          const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
          const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;

          if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
            const canFullyScrollToNewCoordinates = direction === KeyboardCode.Right && scrollContainer.scrollLeft + coordinatesDelta.x <= maxScroll.x || direction === KeyboardCode.Left && scrollContainer.scrollLeft + coordinatesDelta.x >= minScroll.x;

            if (canFullyScrollToNewCoordinates) {
              // We don't need to update coordinates, the scroll adjustment alone will trigger
              // logic to auto-detect the new container we are over
              scrollContainer.scrollBy({
                left: coordinatesDelta.x,
                behavior: scrollBehavior
              });
              return;
            }

            scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
            scrollContainer.scrollBy({
              left: -scrollDelta.x,
              behavior: scrollBehavior
            });
            break;
          } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
            const canFullyScrollToNewCoordinates = direction === KeyboardCode.Down && scrollContainer.scrollTop + coordinatesDelta.y <= maxScroll.y || direction === KeyboardCode.Up && scrollContainer.scrollTop + coordinatesDelta.y >= minScroll.y;

            if (canFullyScrollToNewCoordinates) {
              // We don't need to update coordinates, the scroll adjustment alone will trigger
              // logic to auto-detect the new container we are over
              scrollContainer.scrollBy({
                top: coordinatesDelta.y,
                behavior: scrollBehavior
              });
              return;
            }

            scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
            scrollContainer.scrollBy({
              top: -scrollDelta.y,
              behavior: scrollBehavior
            });
            break;
          }
        }

        this.handleMove(event, utilities.add(newCoordinates, scrollDelta));
      }
    }
  }

  handleMove(event, coordinates) {
    const {
      onMove
    } = this.props;
    event.preventDefault();
    onMove(coordinates);
    this.coordinates = coordinates;
  }

  handleEnd(event) {
    const {
      onEnd
    } = this.props;
    event.preventDefault();
    this.detach();
    onEnd();
  }

  handleCancel(event) {
    const {
      onCancel
    } = this.props;
    event.preventDefault();
    this.detach();
    onCancel();
  }

  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
  }

}
KeyboardSensor.activators = [{
  eventName: 'onKeyDown',
  handler: (event, {
    keyboardCodes = defaultKeyboardCodes,
    onActivation
  }) => {
    const {
      code
    } = event.nativeEvent;

    if (keyboardCodes.start.includes(code)) {
      event.preventDefault();
      onActivation == null ? void 0 : onActivation({
        event: event.nativeEvent
      });
      return true;
    }

    return false;
  }
}];

function isDistanceConstraint(constraint) {
  return Boolean(constraint && 'distance' in constraint);
}

function isDelayConstraint(constraint) {
  return Boolean(constraint && 'delay' in constraint);
}

class AbstractPointerSensor {
  constructor(props, events, listenerTarget = getEventListenerTarget(props.event.target)) {
    var _getEventCoordinates;

    this.props = void 0;
    this.events = void 0;
    this.autoScrollEnabled = true;
    this.document = void 0;
    this.activated = false;
    this.initialCoordinates = void 0;
    this.timeoutId = null;
    this.listeners = void 0;
    this.documentListeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    this.events = events;
    const {
      event
    } = props;
    const {
      target
    } = event;
    this.props = props;
    this.events = events;
    this.document = utilities.getOwnerDocument(target);
    this.documentListeners = new Listeners(this.document);
    this.listeners = new Listeners(listenerTarget);
    this.windowListeners = new Listeners(utilities.getWindow(target));
    this.initialCoordinates = (_getEventCoordinates = utilities.getEventCoordinates(event)) != null ? _getEventCoordinates : defaultCoordinates;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.removeTextSelection = this.removeTextSelection.bind(this);
    this.attach();
  }

  attach() {
    const {
      events,
      props: {
        options: {
          activationConstraint
        }
      }
    } = this;
    this.listeners.add(events.move.name, this.handleMove, {
      passive: false
    });
    this.listeners.add(events.end.name, this.handleEnd);
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.DragStart, preventDefault);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    this.windowListeners.add(EventName.ContextMenu, preventDefault);
    this.documentListeners.add(EventName.Keydown, this.handleKeydown);

    if (activationConstraint) {
      if (isDistanceConstraint(activationConstraint)) {
        return;
      }

      if (isDelayConstraint(activationConstraint)) {
        this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
        return;
      }
    }

    this.handleStart();
  }

  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll(); // Wait until the next event loop before removing document listeners
    // This is necessary because we listen for `click` and `selection` events on the document

    setTimeout(this.documentListeners.removeAll, 50);

    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  handleStart() {
    const {
      initialCoordinates
    } = this;
    const {
      onStart
    } = this.props;

    if (initialCoordinates) {
      this.activated = true; // Stop propagation of click events once activation constraints are met

      this.documentListeners.add(EventName.Click, stopPropagation, {
        capture: true
      }); // Remove any text selection from the document

      this.removeTextSelection(); // Prevent further text selection while dragging

      this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
      onStart(initialCoordinates);
    }
  }

  handleMove(event) {
    var _getEventCoordinates2;

    const {
      activated,
      initialCoordinates,
      props
    } = this;
    const {
      onMove,
      options: {
        activationConstraint
      }
    } = props;

    if (!initialCoordinates) {
      return;
    }

    const coordinates = (_getEventCoordinates2 = utilities.getEventCoordinates(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
    const delta = utilities.subtract(initialCoordinates, coordinates);

    if (!activated && activationConstraint) {
      // Constraint validation
      if (isDelayConstraint(activationConstraint)) {
        if (hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }

        return;
      }

      if (isDistanceConstraint(activationConstraint)) {
        if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }

        if (hasExceededDistance(delta, activationConstraint.distance)) {
          return this.handleStart();
        }

        return;
      }
    }

    if (event.cancelable) {
      event.preventDefault();
    }

    onMove(coordinates);
  }

  handleEnd() {
    const {
      onEnd
    } = this.props;
    this.detach();
    onEnd();
  }

  handleCancel() {
    const {
      onCancel
    } = this.props;
    this.detach();
    onCancel();
  }

  handleKeydown(event) {
    if (event.code === KeyboardCode.Esc) {
      this.handleCancel();
    }
  }

  removeTextSelection() {
    var _this$document$getSel;

    (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
  }

}

const events = {
  move: {
    name: 'pointermove'
  },
  end: {
    name: 'pointerup'
  }
};
class PointerSensor extends AbstractPointerSensor {
  constructor(props) {
    const {
      event
    } = props; // Pointer events stop firing if the target is unmounted while dragging
    // Therefore we attach listeners to the owner document instead

    const listenerTarget = utilities.getOwnerDocument(event.target);
    super(props, events, listenerTarget);
  }

}
PointerSensor.activators = [{
  eventName: 'onPointerDown',
  handler: ({
    nativeEvent: event
  }, {
    onActivation
  }) => {
    if (!event.isPrimary || event.button !== 0) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

const events$1 = {
  move: {
    name: 'mousemove'
  },
  end: {
    name: 'mouseup'
  }
};
var MouseButton;

(function (MouseButton) {
  MouseButton[MouseButton["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));

class MouseSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$1, utilities.getOwnerDocument(props.event.target));
  }

}
MouseSensor.activators = [{
  eventName: 'onMouseDown',
  handler: ({
    nativeEvent: event
  }, {
    onActivation
  }) => {
    if (event.button === MouseButton.RightClick) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

const events$2 = {
  move: {
    name: 'touchmove'
  },
  end: {
    name: 'touchend'
  }
};
class TouchSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$2);
  }

  static setup() {
    // Adding a non-capture and non-passive `touchmove` listener in order
    // to force `event.preventDefault()` calls to work in dynamically added
    // touchmove event handlers. This is required for iOS Safari.
    window.addEventListener(events$2.move.name, noop, {
      capture: false,
      passive: false
    });
    return function teardown() {
      window.removeEventListener(events$2.move.name, noop);
    }; // We create a new handler because the teardown function of another sensor
    // could remove our event listener if we use a referentially equal listener.

    function noop() {}
  }

}
TouchSensor.activators = [{
  eventName: 'onTouchStart',
  handler: ({
    nativeEvent: event
  }, {
    onActivation
  }) => {
    const {
      touches
    } = event;

    if (touches.length > 1) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

function applyModifiers(modifiers, {
  transform,
  ...args
}) {
  return (modifiers == null ? void 0 : modifiers.length) ? modifiers.reduce((accumulator, modifier) => {
    return modifier({
      transform: accumulator,
      ...args
    });
  }, transform) : transform;
}

const defaultSensors = [{
  sensor: PointerSensor,
  options: {}
}, {
  sensor: KeyboardSensor,
  options: {}
}];
const defaultData = {
  current: {}
};
const ActiveDraggableContext = /*#__PURE__*/React.createContext({ ...defaultCoordinates,
  scaleX: 1,
  scaleY: 1
});
const DndContext = /*#__PURE__*/React.memo(function DndContext({
  id,
  autoScroll = true,
  announcements,
  children,
  sensors = defaultSensors,
  collisionDetection = rectIntersection,
  measuring,
  modifiers,
  screenReaderInstructions: screenReaderInstructions$1 = screenReaderInstructions,
  ...props
}) {
  var _measuring$draggable$, _measuring$draggable, _sensorContext$curren, _measuring$dragOverla, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;

  const store = React.useReducer(reducer, undefined, getInitialState);
  const [state, dispatch] = store;
  const [monitorState, setMonitorState] = React.useState(() => ({
    type: null,
    event: null
  }));
  const [isDragging, setIsDragging] = React.useState(false);
  const {
    draggable: {
      active: activeId,
      nodes: draggableNodes,
      translate
    },
    droppable: {
      containers: droppableContainers
    }
  } = state;
  const node = activeId ? draggableNodes[activeId] : null;
  const activeRects = React.useRef({
    initial: null,
    translated: null
  });
  const active = React.useMemo(() => {
    var _node$data;

    return activeId != null ? {
      id: activeId,
      // It's possible for the active node to unmount while dragging
      data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
      rect: activeRects
    } : null;
  }, [activeId, node]);
  const activeRef = React.useRef(null);
  const [activeSensor, setActiveSensor] = React.useState(null);
  const [activatorEvent, setActivatorEvent] = React.useState(null);
  const latestProps = utilities.useLatestValue(props, Object.values(props));
  const draggableDescribedById = utilities.useUniqueId(`DndDescribedBy`, id);
  const enabledDroppableContainers = React.useMemo(() => droppableContainers.getEnabled(), [droppableContainers]);
  const {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled
  } = useDroppableMeasuring(enabledDroppableContainers, {
    dragging: isDragging,
    dependencies: [translate.x, translate.y],
    config: measuring == null ? void 0 : measuring.droppable
  });
  const activeNode = useCachedNode(draggableNodes, activeId);
  const activationCoordinates = activatorEvent ? utilities.getEventCoordinates(activatorEvent) : null;
  const activeNodeRect = useRect(activeNode, (_measuring$draggable$ = measuring == null ? void 0 : (_measuring$draggable = measuring.draggable) == null ? void 0 : _measuring$draggable.measure) != null ? _measuring$draggable$ : getTransformAgnosticClientRect);
  const containerNodeRect = useClientRect(activeNode ? activeNode.parentElement : null);
  const sensorContext = React.useRef({
    active: null,
    activeNode,
    collisionRect: null,
    collisions: null,
    droppableRects,
    draggableNodes,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  });
  const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
  const dragOverlay = useDragOverlayMeasuring({
    measure: measuring == null ? void 0 : (_measuring$dragOverla = measuring.dragOverlay) == null ? void 0 : _measuring$dragOverla.measure
  }); // Use the rect of the drag overlay if it is mounted

  const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
  const draggingNodeRect = (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect;
  const initialActiveNodeRectRef = React.useRef(null);
  const initialActiveNodeRect = initialActiveNodeRectRef.current; // The delta between the previous and new position of the draggable node
  // is only relevant when there is no drag overlay

  const nodeRectDelta = draggingNodeRect === activeNodeRect ? getRectDelta(activeNodeRect, initialActiveNodeRect) : defaultCoordinates; // Get the window rect of the dragging node

  const windowRect = useWindowRect(draggingNode ? draggingNode.ownerDocument.defaultView : null); // Get scrollable ancestors of the dragging node

  const scrollableAncestors = useScrollableAncestors(activeId ? overNode != null ? overNode : draggingNode : null);
  const scrollableAncestorRects = useClientRects(scrollableAncestors); // Apply modifiers

  const modifiedTranslate = applyModifiers(modifiers, {
    transform: {
      x: translate.x - nodeRectDelta.x,
      y: translate.y - nodeRectDelta.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect,
    over: sensorContext.current.over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  });
  const pointerCoordinates = activationCoordinates ? utilities.add(activationCoordinates, translate) : null;
  const scrollAdjustment = useScrollOffsets(scrollableAncestors);
  const scrollAdjustedTranslate = utilities.add(modifiedTranslate, scrollAdjustment);
  const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
  const collisions = active && collisionRect ? collisionDetection({
    active,
    collisionRect,
    droppableContainers: enabledDroppableContainers,
    pointerCoordinates
  }) : null;
  const overId = getFirstCollision(collisions, 'id');
  const [over, setOver] = React.useState(null);
  const transform = adjustScale(modifiedTranslate, (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
  const instantiateSensor = React.useCallback((event, {
    sensor: Sensor,
    options
  }) => {
    if (!activeRef.current) {
      return;
    }

    const activeNode = draggableNodes[activeRef.current];

    if (!activeNode) {
      return;
    }

    const sensorInstance = new Sensor({
      active: activeRef.current,
      activeNode,
      event: event.nativeEvent,
      options,
      // Sensors need to be instantiated with refs for arguments that change over time
      // otherwise they are frozen in time with the stale arguments
      context: sensorContext,

      onStart(initialCoordinates) {
        const id = activeRef.current;

        if (!id) {
          return;
        }

        const node = draggableNodes[id];

        if (!node) {
          return;
        }

        const {
          onDragStart
        } = latestProps.current;
        const event = {
          active: {
            id,
            data: node.data,
            rect: activeRects
          }
        };
        reactDom.unstable_batchedUpdates(() => {
          dispatch({
            type: Action.DragStart,
            initialCoordinates,
            active: id
          });
          setMonitorState({
            type: Action.DragStart,
            event
          });
        });
        onDragStart == null ? void 0 : onDragStart(event);
      },

      onMove(coordinates) {
        dispatch({
          type: Action.DragMove,
          coordinates
        });
      },

      onEnd: createHandler(Action.DragEnd),
      onCancel: createHandler(Action.DragCancel)
    });
    reactDom.unstable_batchedUpdates(() => {
      setActiveSensor(sensorInstance);
      setActivatorEvent(event.nativeEvent);
    });

    function createHandler(type) {
      return async function handler() {
        const {
          active,
          collisions,
          over,
          scrollAdjustedTranslate
        } = sensorContext.current;
        let event = null;

        if (active && scrollAdjustedTranslate) {
          const {
            cancelDrop
          } = latestProps.current;
          event = {
            active: active,
            collisions,
            delta: scrollAdjustedTranslate,
            over
          };

          if (type === Action.DragEnd && typeof cancelDrop === 'function') {
            const shouldCancel = await Promise.resolve(cancelDrop(event));

            if (shouldCancel) {
              type = Action.DragCancel;
            }
          }
        }

        activeRef.current = null;
        reactDom.unstable_batchedUpdates(() => {
          dispatch({
            type
          });
          setOver(null);
          setIsDragging(false);
          setActiveSensor(null);
          setActivatorEvent(null);

          if (event) {
            setMonitorState({
              type,
              event
            });
          }

          if (event) {
            const {
              onDragCancel,
              onDragEnd
            } = latestProps.current;
            const handler = type === Action.DragEnd ? onDragEnd : onDragCancel;
            handler == null ? void 0 : handler(event);
          }
        });
      };
    }
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [draggableNodes]);
  const bindActivatorToSensorInstantiator = React.useCallback((handler, sensor) => {
    return (event, active) => {
      const nativeEvent = event.nativeEvent;

      if ( // No active draggable
      activeRef.current !== null || // Event has already been captured
      nativeEvent.dndKit || nativeEvent.defaultPrevented) {
        return;
      }

      if (handler(event, sensor.options) === true) {
        nativeEvent.dndKit = {
          capturedBy: sensor.sensor
        };
        activeRef.current = active;
        instantiateSensor(event, sensor);
      }
    };
  }, [instantiateSensor]);
  const activators = useCombineActivators(sensors, bindActivatorToSensorInstantiator);
  useSensorSetup(sensors);
  React.useEffect(() => {
    if (activeId != null) {
      setIsDragging(true);
    }
  }, [activeId]);
  React.useEffect(() => {
    if (!active) {
      initialActiveNodeRectRef.current = null;
    }

    if (active && activeNodeRect && !initialActiveNodeRectRef.current) {
      initialActiveNodeRectRef.current = activeNodeRect;
    }
  }, [activeNodeRect, active]);
  React.useEffect(() => {
    const {
      onDragMove
    } = latestProps.current;
    const {
      active,
      collisions,
      over
    } = sensorContext.current;

    if (!active) {
      return;
    }

    const event = {
      active,
      collisions,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y
      },
      over
    };
    setMonitorState({
      type: Action.DragMove,
      event
    });
    onDragMove == null ? void 0 : onDragMove(event);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]);
  React.useEffect(() => {
    const {
      active,
      collisions,
      droppableContainers,
      scrollAdjustedTranslate
    } = sensorContext.current;

    if (!active || !activeRef.current || !scrollAdjustedTranslate) {
      return;
    }

    const {
      onDragOver
    } = latestProps.current;
    const overContainer = droppableContainers.get(overId);
    const over = overContainer && overContainer.rect.current ? {
      id: overContainer.id,
      rect: overContainer.rect.current,
      data: overContainer.data,
      disabled: overContainer.disabled
    } : null;
    const event = {
      active,
      collisions,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y
      },
      over
    };
    reactDom.unstable_batchedUpdates(() => {
      setOver(over);
      setMonitorState({
        type: Action.DragOver,
        event
      });
      onDragOver == null ? void 0 : onDragOver(event);
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [overId]);
  utilities.useIsomorphicLayoutEffect(() => {
    sensorContext.current = {
      active,
      activeNode,
      collisionRect,
      collisions,
      droppableRects,
      draggableNodes,
      draggingNode,
      draggingNodeRect,
      droppableContainers,
      over,
      scrollableAncestors,
      scrollAdjustedTranslate: scrollAdjustedTranslate
    };
    activeRects.current = {
      initial: draggingNodeRect,
      translated: collisionRect
    };
  }, [active, activeNode, collisions, collisionRect, draggableNodes, draggingNode, draggingNodeRect, droppableRects, droppableContainers, over, scrollableAncestors, scrollAdjustedTranslate]);
  useAutoScroller({ ...getAutoScrollerOptions(),
    draggingRect: collisionRect,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects
  });
  const publicContext = React.useMemo(() => {
    const context = {
      active,
      activeNode,
      activeNodeRect,
      activatorEvent,
      collisions,
      containerNodeRect,
      dragOverlay,
      draggableNodes,
      droppableContainers,
      droppableRects,
      over,
      measureDroppableContainers,
      scrollableAncestors,
      scrollableAncestorRects,
      measuringScheduled,
      windowRect
    };
    return context;
  }, [active, activeNode, activeNodeRect, activatorEvent, collisions, containerNodeRect, dragOverlay, draggableNodes, droppableContainers, droppableRects, over, measureDroppableContainers, scrollableAncestors, scrollableAncestorRects, measuringScheduled, windowRect]);
  const internalContext = React.useMemo(() => {
    const context = {
      activatorEvent,
      activators,
      active,
      activeNodeRect,
      ariaDescribedById: {
        draggable: draggableDescribedById
      },
      dispatch,
      draggableNodes,
      over,
      measureDroppableContainers
    };
    return context;
  }, [activatorEvent, activators, active, activeNodeRect, dispatch, draggableDescribedById, draggableNodes, over, measureDroppableContainers]);
  return React__default["default"].createElement(DndMonitorContext.Provider, {
    value: monitorState
  }, React__default["default"].createElement(InternalContext.Provider, {
    value: internalContext
  }, React__default["default"].createElement(PublicContext.Provider, {
    value: publicContext
  }, React__default["default"].createElement(ActiveDraggableContext.Provider, {
    value: transform
  }, children))), React__default["default"].createElement(Accessibility, {
    announcements: announcements,
    hiddenTextDescribedById: draggableDescribedById,
    screenReaderInstructions: screenReaderInstructions$1
  }));

  function getAutoScrollerOptions() {
    const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
    const autoScrollGloballyDisabled = typeof autoScroll === 'object' ? autoScroll.enabled === false : autoScroll === false;
    const enabled = !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;

    if (typeof autoScroll === 'object') {
      return { ...autoScroll,
        enabled
      };
    }

    return {
      enabled
    };
  }
});

var makeScrollButton = function (ActionButton) { return styled__default["default"](ActionButton)(templateObject_1$4 || (templateObject_1$4 = tslib.__makeTemplateObject(["\n    display: inline-block;\n    filter: none;\n    position: absolute;\n    ", ";\n    &:hover {\n        cursor: pointer;\n    }\n"], ["\n    display: inline-block;\n    filter: none;\n    position: absolute;\n    ", ";\n    &:hover {\n        cursor: pointer;\n    }\n"])), function (props) { return (props.left ? (props.showModalButton ? "left: ".concat(buttonWidth + 2, "px") : "left: 0") : 'right: 0'); }); };
var makeFoldButton = function (ActionButton) { return styled__default["default"](ActionButton)(templateObject_2$1 || (templateObject_2$1 = tslib.__makeTemplateObject(["\n    display: inline-block;\n    filter: none;\n    position: absolute;\n    left: 0;\n    &:hover {\n        cursor: pointer;\n    }\n"], ["\n    display: inline-block;\n    filter: none;\n    position: absolute;\n    left: 0;\n    &:hover {\n        cursor: pointer;\n    }\n"]))); };
var TabListComponent = /** @class */ (function (_super) {
    tslib.__extends(TabListComponent, _super);
    function TabListComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.toggleModal = _this.toggleModal.bind(_this);
        _this.renderTabs = _this.renderTabs.bind(_this);
        _this.renderModal = _this.renderModal.bind(_this);
        _this.renderArrowButton = _this.renderArrowButton.bind(_this);
        _this.isShowModalButton = _this.isShowModalButton.bind(_this);
        _this.isShowArrowButton = _this.isShowArrowButton.bind(_this);
        _this.scrollPosition = 0;
        _this.tabRefs = [];
        _this.state = {
            modalIsOpen: false,
            showArrowButton: false,
            showModalButton: false,
        };
        return _this;
    }
    TabListComponent.prototype.componentDidMount = function () {
        this.isShowArrowButton();
        this.isShowModalButton();
        if (this.props.activeIndex > 0)
            this.scrollToIndex(this.props.activeIndex, 'left');
    };
    TabListComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.children.length !== this.props.children.length) {
            this.isShowArrowButton();
            this.isShowModalButton();
        }
        if (prevProps.activeIndex !== this.props.activeIndex) {
            //if we scroll to the last tab, alignment is set to the right side of the tab
            var rectSide = this.props.activeIndex === this.props.children.length - 1 ? 'right' : 'left';
            this.scrollToIndex(this.props.activeIndex, rectSide);
        }
        // if prev state show arrow button, and current state doesn't show
        // need to reset the scroll position, or some tabs will be hided by container.
        if (prevState.showArrowButton && !this.state.showArrowButton) {
            this.scrollToZero();
        }
        if (prevProps.showModalButton !== this.props.showModalButton) {
            this.isShowModalButton();
        }
        if (prevProps.showArrowButton !== this.props.showArrowButton) {
            this.isShowArrowButton();
        }
    };
    TabListComponent.prototype.getTabNode = function (tab) {
        if (tab.__INTERNAL_NODE) {
            // normal tab
            return tab.__INTERNAL_NODE;
        }
        else if (tab.__DRAG_TAB_INTERNAL_NODE) {
            // drag tab
            return tab.__DRAG_TAB_INTERNAL_NODE.node;
        }
    };
    TabListComponent.prototype.unifyScrollMax = function (width) {
        return (width / 3) * 2;
    };
    TabListComponent.prototype.handleScroll = function (direction) {
        var leftMove = 0;
        var containerOffset = this.listContainer.getBoundingClientRect();
        var containerWidth = this.listContainer.offsetWidth;
        var tabFirstOffset = this.getTabNode(this.tabRefs[0]).getBoundingClientRect();
        var tabLastOffset = this.getTabNode(this.tabRefs[this.tabRefs.length - 1]).getBoundingClientRect();
        if (direction === 'right') {
            leftMove = tabLastOffset.right - containerOffset.right;
            if (leftMove > containerWidth) {
                leftMove = this.unifyScrollMax(containerWidth);
            }
        }
        else if (direction === 'left') {
            leftMove = tabFirstOffset.left - containerOffset.left;
            if (-leftMove > containerWidth) {
                leftMove = -this.unifyScrollMax(containerWidth);
            }
        }
        this.scrollPosition += leftMove;
        if (this.scrollPosition < 0) {
            this.scrollPosition = 0;
        }
        this.listScroll.style.transform = "translate3d(-".concat(this.scrollPosition, "px, 0, 0)");
    };
    TabListComponent.prototype.scrollToIndex = function (index, rectSide) {
        var tabOffset = this.getTabNode(this.tabRefs[index]).getBoundingClientRect();
        var containerOffset = this.listContainer.getBoundingClientRect();
        // Cancel scrolling if the tab is visible
        if (tabOffset.right < containerOffset.right && tabOffset.left > containerOffset.left)
            return;
        var leftMove = tabOffset[rectSide] - containerOffset[rectSide];
        this.scrollPosition += leftMove;
        if (this.scrollPosition < 0) {
            this.scrollPosition = 0;
        }
        this.listScroll.style.transform = "translate3d(-".concat(this.scrollPosition, "px, 0, 0)");
    };
    TabListComponent.prototype.scrollToZero = function () {
        this.listScroll.style.transform = "translate3d(0, 0, 0)";
    };
    TabListComponent.prototype.toggleModal = function (open) {
        var _this = this;
        console.log('toggleModal');
        this.setState({ modalIsOpen: open }, function () {
            if (!open) {
                _this.scrollToIndex(_this.props.activeIndex, 'right');
            }
        });
    };
    TabListComponent.prototype.isShowModalButton = function () {
        var showModalButton = this.props.showModalButton;
        if (isNumber(showModalButton)) {
            // $FlowFixMe, weired. currently set showModalButton as number | bool, but don't know why flow only can recognize it as bool
            showModalButton = this.props.children.length >= showModalButton;
        }
        this.setState({ showModalButton: showModalButton });
    };
    TabListComponent.prototype.isShowArrowButton = function () {
        var showArrowButton = this.props.showArrowButton;
        if (showArrowButton === 'auto') {
            var tabWidth = 0;
            var containerWidth = this.listContainer.offsetWidth;
            showArrowButton = false;
            for (var index = 0; index < this.tabRefs.length; index++) {
                var tab = this.getTabNode(this.tabRefs[index]);
                tabWidth += tab.offsetWidth;
                if (tabWidth >= containerWidth) {
                    showArrowButton = true;
                    break;
                }
            }
        }
        // $FlowFixMe: flow will show 'auto' is not bool, but with this logic, showArrowButton will never be 'auto'
        this.setState({ showArrowButton: showArrowButton });
    };
    TabListComponent.prototype.renderTabs = function (options, isModal) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var _a = this.props, children = _a.children, activeIndex = _a.activeIndex, handleTabChange = _a.handleTabChange, handleTabClose = _a.handleTabClose, customStyle = _a.customStyle;
        var props = {
            handleTabChange: handleTabChange,
            handleTabClose: handleTabClose,
            CustomTabStyle: customStyle.Tab,
        };
        if (!isModal) {
            this.tabRefs = [];
        }
        return React__namespace.Children.map(children, function (child, index) {
            return React__namespace.cloneElement(child, tslib.__assign(tslib.__assign({ key: index, active: index === activeIndex, index: index, tabIndex: index, ref: function (node) {
                    if (!isModal && node) {
                        _this.tabRefs.push(node);
                    }
                } }, props), options));
        });
    };
    TabListComponent.prototype.renderArrowButton = function (ScrollButton) {
        var _this = this;
        var showArrowButton = this.state.showArrowButton;
        if (showArrowButton) {
            return (React__namespace.createElement("div", null,
                React__namespace.createElement(ScrollButton, { left: true, onClick: function () {
                        _this.handleScroll('left');
                    }, ref: function (node) { return (_this.leftArrowNode = node); }, showModalButton: this.state.showModalButton },
                    React__namespace.createElement(LeftIcon, null)),
                React__namespace.createElement(ScrollButton, { onClick: function () {
                        _this.handleScroll('right');
                    }, ref: function (node) { return (_this.rightArrowNode = node); } },
                    React__namespace.createElement(RightIcon, null))));
        }
        return null;
    };
    TabListComponent.prototype.renderModal = function () {
        var _a = this.props, activeIndex = _a.activeIndex, handleTabChange = _a.handleTabChange, handleTabSequence = _a.handleTabSequence;
        console.log('renderModal');
        return this.props.sortableContextProps ? (React__namespace.createElement(DndContext, tslib.__assign({}, this.props.dndContextProps),
            React__namespace.createElement(sortable.SortableContext, tslib.__assign({}, this.props.sortableContextProps),
                React__namespace.createElement(TabModal, { closeModal: this.toggleModal.bind(this, false), handleTabSequence: handleTabSequence, handleTabChange: handleTabChange, activeIndex: activeIndex }, this.renderTabs({ vertical: true }, true))))) : (React__namespace.createElement(TabModal, { closeModal: this.toggleModal.bind(this, false), handleTabSequence: handleTabSequence, handleTabChange: handleTabChange, activeIndex: activeIndex }, this.renderTabs({ vertical: true }, true)));
    };
    TabListComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, customStyle = _a.customStyle, ExtraButton = _a.ExtraButton;
        var modalIsOpen = this.state.modalIsOpen;
        var TabList = customStyle.TabList || TabListStyle;
        var ActionButton = customStyle.ActionButton || ActionButtonStyle;
        var ScrollButton = makeScrollButton(ActionButton);
        var FoldButton = makeFoldButton(ActionButton);
        invariant__default["default"](this.props.children, 'React-tabtab Error: You MUST pass at least one tab');
        return (React__namespace.createElement(React__namespace.Fragment, null,
            ExtraButton ? ExtraButton : null,
            React__namespace.createElement("button", { onClick: function () {
                    console.log('test');
                } }, "test"),
            React__namespace.createElement(TabList, { showModalButton: this.state.showModalButton, showArrowButton: this.state.showArrowButton },
                this.state.showModalButton ? (React__namespace.createElement(FoldButton, { ref: function (node) { return (_this.foldNode = node); }, onClick: this.toggleModal.bind(this, true), showArrowButton: this.state.showArrowButton },
                    React__namespace.createElement(BulletIcon, null))) : null,
                this.renderArrowButton(ScrollButton),
                React__namespace.createElement(ListInner, { ref: function (node) { return (_this.listContainer = node); } },
                    React__namespace.createElement(ListScroll, { ref: function (node) { return (_this.listScroll = node); }, role: "tablist" }, this.renderTabs()))),
            modalIsOpen && this.renderModal()));
    };
    return TabListComponent;
}(React__namespace.PureComponent));
var templateObject_1$4, templateObject_2$1;

var CloseWrapper = styled__default["default"].button(templateObject_1$3 || (templateObject_1$3 = tslib.__makeTemplateObject(["\n    display: inline-block;\n    color: #777;\n    margin-left: 5px;\n    padding: 0;\n    vertical-align: middle;\n    background-color: transparent;\n    border: 0;\n    padding: 2px;\n    outline: 0;\n    &:hover {\n        color: black;\n        background-color: #eee;\n        cursor: pointer;\n        border-radius: 50%;\n    }\n    > svg {\n        vertical-align: middle;\n    }\n"], ["\n    display: inline-block;\n    color: #777;\n    margin-left: 5px;\n    padding: 0;\n    vertical-align: middle;\n    background-color: transparent;\n    border: 0;\n    padding: 2px;\n    outline: 0;\n    &:hover {\n        color: black;\n        background-color: #eee;\n        cursor: pointer;\n        border-radius: 50%;\n    }\n    > svg {\n        vertical-align: middle;\n    }\n"])));
var CloseButton = /** @class */ (function (_super) {
    tslib.__extends(CloseButton, _super);
    function CloseButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseButton.prototype.render = function () {
        return (React__namespace.createElement(CloseWrapper, { onClick: this.props.handleTabClose },
            React__namespace.createElement(CloseIcon, null)));
    };
    return CloseButton;
}(React__namespace.PureComponent));
var templateObject_1$3;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var TabElement = React__namespace.memo(React__namespace.forwardRef(function (_a, ref) {
    _a.active; _a.closable; _a.vertical; var props = tslib.__rest(_a, ["active", "closable", "vertical"]);
    return (React__namespace.createElement("li", tslib.__assign({ ref: ref }, props), props.children));
}));
var TabStyle = styled__default["default"](TabElement)(templateObject_1$2 || (templateObject_1$2 = tslib.__makeTemplateObject(["\n    display: ", ";\n    color: #000000bb;\n    border-bottom: 2px solid transparent;\n    white-space: nowrap;\n    ", "\n\n    user-select: none;\n    &:hover,\n    &:active {\n        cursor: pointer;\n        color: black;\n    }\n    ", "\n"], ["\n    display: ", ";\n    color: #000000bb;\n    border-bottom: 2px solid transparent;\n    white-space: nowrap;\n    ", "\n\n    user-select: none;\n    &:hover,\n    &:active {\n        cursor: pointer;\n        color: black;\n    }\n    ", "\n"])), function (props) { return (props.vertical ? 'block' : 'inline-block'); }, function (props) {
    return props.vertical
        ? "\n      background-color: white;\n      color: black;\n      padding: 10px 10px;\n      z-index: 1;\n    "
        : function (props) { return (props.closable ? 'padding: 10px 10px 10px 15px;' : 'padding: 10px 15px 8px 15px;'); };
}, function (props) {
    return props.active
        ? "\n      color: black;\n      border-bottom: 2px solid; \n    "
        : null;
});
var TabText = styled__default["default"].span(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["\n    vertical-align: middle;\n"], ["\n    vertical-align: middle;\n"])));
var Tab = /** @class */ (function (_super) {
    tslib.__extends(Tab, _super);
    function Tab(props) {
        var _this = _super.call(this, props) || this;
        _this.clickTab = _this.clickTab.bind(_this);
        _this.clickDelete = _this.clickDelete.bind(_this);
        return _this;
    }
    Tab.prototype.clickTab = function () {
        var _a = this.props, handleTabChange = _a.handleTabChange, index = _a.index;
        handleTabChange(index);
    };
    Tab.prototype.clickDelete = function (event) {
        event.stopPropagation(); // prevent trigger clickTab event.
        var _a = this.props, handleTabClose = _a.handleTabClose, index = _a.index;
        handleTabClose(index);
    };
    Tab.prototype.render = function () {
        var _this = this;
        var _a = this.props, CustomTabStyle = _a.CustomTabStyle, active = _a.active, closable = _a.closable, vertical = _a.vertical, index = _a.index;
        var TabComponent = CustomTabStyle || TabStyle;
        return (React__namespace.createElement(TabComponent, { ref: function (node) { return (_this.__INTERNAL_NODE = node); }, onMouseDown: this.clickTab, active: active, vertical: vertical, closable: closable, role: "tab", id: "react-tabtab-tab-".concat(index), "aria-controls": "react-tabtab-panel-".concat(index), "aria-selected": active },
            React__namespace.createElement(TabText, null, this.props.children),
            closable ? React__namespace.createElement(CloseButton, { handleTabClose: this.clickDelete }) : null));
    };
    return Tab;
}(React__namespace.PureComponent));
var templateObject_1$2, templateObject_2;

var DragTab = React.memo(React.forwardRef(function (_a, ref) {
    var children = _a.children, id = _a.id, index = _a.index, activeIndex = _a.activeIndex, rest = tslib.__rest(_a, ["children", "id", "index", "activeIndex"]);
    var _b = sortable.useSortable({ id: id }), attributes = _b.attributes, listeners = _b.listeners, setNodeRef = _b.setNodeRef, transform = _b.transform, transition = _b.transition;
    var style = {
        transform: utilities.CSS.Transform.toString(transform),
        transition: transition,
        // cursor: 'default',
    };
    return (React__default["default"].createElement("div", tslib.__assign({ ref: setNodeRef, style: style }, attributes, listeners), React__default["default"].cloneElement(children, tslib.__assign(tslib.__assign({}, rest), { key: id, active: index === activeIndex, index: index, tabIndex: id, ref: ref }))));
}));

var DragTabList = React.memo(function (_a) {
    var children = _a.children, props = tslib.__rest(_a, ["children"]);
    var _b = React.useState([]), items = _b[0], setItems = _b[1];
    React.useEffect(function () {
        setItems(React__default["default"].Children.map(children, function (_, i) { return i.toString(); }));
    }, [children]);
    var mouseSensor = useSensor(MouseSensor, {
        // Require the mouse to move by 10 pixels before activating
        activationConstraint: {
            distance: 10,
        },
    });
    var sensors = useSensors(mouseSensor);
    var handleOnDragEnd = React.useCallback(function (event) {
        var active = event.active, over = event.over;
        if (!props.onTabSequenceChange || !(over === null || over === void 0 ? void 0 : over.id)) {
            return;
        }
        if (active.id !== over.id) {
            props.onTabSequenceChange({ newIndex: Number(over.id), oldIndex: Number(active.id) });
        }
    }, [props.onTabSequenceChange]);
    return (React__default["default"].createElement("div", { style: {} },
        React__default["default"].createElement(DndContext, { sensors: sensors, onDragEnd: handleOnDragEnd },
            React__default["default"].createElement(sortable.SortableContext, { items: items },
                React__default["default"].createElement(TabListComponent, tslib.__assign({}, props, { sortableContextProps: { items: items }, dndContextProps: { onDragEnd: handleOnDragEnd } }), React__default["default"].Children.map(children, function (child, i) { return (React__default["default"].createElement(DragTab, tslib.__assign({ id: i.toString(), key: i, index: i }, props), child)); }))))));
});

var PanelList = /** @class */ (function (_super) {
    tslib.__extends(PanelList, _super);
    function PanelList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelList.prototype.render = function () {
        var _a = this.props, children = _a.children, activeIndex = _a.activeIndex, customStyle = _a.customStyle;
        if (!children || activeIndex === undefined) {
            return null;
        }
        var props = {};
        if (customStyle && customStyle.Panel) {
            props = tslib.__assign(tslib.__assign({}, props), { CustomPanelStyle: customStyle.Panel });
        }
        // to prevent the type of one children is object type
        var result = React__namespace.Children.toArray(children).map(function (child, index) {
            return React__namespace.cloneElement(child, tslib.__assign({ key: index, active: index === activeIndex, index: index }, props));
        });
        return React__namespace.createElement("div", null, result);
    };
    return PanelList;
}(React__namespace.PureComponent));

var PanelStyle = styled__default["default"].div(templateObject_1$1 || (templateObject_1$1 = tslib.__makeTemplateObject(["\n    background-color: white;\n    text-align: left;\n    padding: 20px 15px;\n    ", "\n"], ["\n    background-color: white;\n    text-align: left;\n    padding: 20px 15px;\n    ", "\n"])), function (props) { return (!props.active ? "display: none;" : null); });
var PanelComponent = /** @class */ (function (_super) {
    tslib.__extends(PanelComponent, _super);
    function PanelComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelComponent.prototype.render = function () {
        var _a = this.props, active = _a.active, index = _a.index;
        var Panel = this.props.CustomPanelStyle || PanelStyle;
        return (React__namespace.createElement(Panel, { role: "tabpanel", id: "react-tabtab-panel-".concat(index), "aria-labelledby": "react-tabtab-".concat(index), "aria-hidden": false, active: active }, active ? this.props.children : null));
    };
    return PanelComponent;
}(React__namespace.PureComponent));
var templateObject_1$1;

var AsyncPanelComponent = /** @class */ (function (_super) {
    tslib.__extends(AsyncPanelComponent, _super);
    function AsyncPanelComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.loadPanel = _this.loadPanel.bind(_this);
        _this.cacheData = undefined;
        _this.state = {
            isLoading: false,
            data: undefined,
        };
        return _this;
    }
    AsyncPanelComponent.prototype.componentDidMount = function () {
        if (this.props.active)
            this.loadPanel();
    };
    AsyncPanelComponent.prototype.componentDidUpdate = function (prevProps) {
        this.props.active && !prevProps.active && this.loadPanel();
    };
    AsyncPanelComponent.prototype.loadPanel = function () {
        var _this = this;
        var _a = this.props, loadContent = _a.loadContent, cache = _a.cache;
        if (cache && this.cacheData) {
            this.setState({
                isLoading: false,
                data: this.cacheData,
            });
            return;
        }
        var callback = function (err, data) {
            if (err) {
                console.error('React-Tabtab async panel error:', err);
            }
            if (cache) {
                _this.cacheData = data;
            }
            _this.setState({
                isLoading: false,
                data: data,
            });
        };
        var promise = loadContent(callback);
        if (promise) {
            promise.then(function (data) { return callback(null, data); }, function (err) { return callback(err); });
        }
        if (!this.state.isLoading) {
            this.setState({ isLoading: true });
        }
    };
    AsyncPanelComponent.prototype.render = function () {
        var _a = this.props, render = _a.render, renderLoading = _a.renderLoading, CustomPanelStyle = _a.CustomPanelStyle, active = _a.active, index = _a.index;
        var _b = this.state, isLoading = _b.isLoading, data = _b.data;
        var content;
        if (isLoading) {
            content = renderLoading();
        }
        else {
            content = render(data);
        }
        return React__namespace.createElement(PanelComponent, tslib.__assign({}, { CustomPanelStyle: CustomPanelStyle, active: active, index: index }), content);
    };
    AsyncPanelComponent.defaultProps = {
        cache: true,
    };
    return AsyncPanelComponent;
}(React__namespace.PureComponent));

var Wrapper = styled__default["default"].button(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["\n    float: right;\n    border: 1px solid #eee;\n    border-radius: 2px;\n    padding: 3px;\n    margin-top: 10px;\n    margin-left: 2px;\n    display: inline-block;\n    color: #777;\n    vertical-align: middle;\n    ", "\n    &:hover {\n        color: black;\n        cursor: pointer;\n    }\n    &:disabled,\n    &[disabled] {\n        border: 1px solid grey;\n        background-color: #e7e7e7;\n        cursor: not-allowed;\n    }\n"], ["\n    float: right;\n    border: 1px solid #eee;\n    border-radius: 2px;\n    padding: 3px;\n    margin-top: 10px;\n    margin-left: 2px;\n    display: inline-block;\n    color: #777;\n    vertical-align: middle;\n    ", "\n    &:hover {\n        color: black;\n        cursor: pointer;\n    }\n    &:disabled,\n    &[disabled] {\n        border: 1px solid grey;\n        background-color: #e7e7e7;\n        cursor: not-allowed;\n    }\n"])), function (props) {
    return props.disabled
        ? "\n    pointer-events: none;\n    color: #AAA;\n    background: #F5F5F5;\n  "
        : null;
});
var ExtraButton = /** @class */ (function (_super) {
    tslib.__extends(ExtraButton, _super);
    function ExtraButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtraButton.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, onClick = _a.onClick;
        return (React__namespace.createElement(Wrapper, { onClick: onClick, disabled: disabled }, this.props.children));
    };
    ExtraButton.defaultProps = {
        disabled: false,
    };
    return ExtraButton;
}(React__namespace.PureComponent));
var templateObject_1;

function deleteHelper(sequence, deleteIndex) {
    return sequence.filter(function (_, i) { return i !== deleteIndex; });
}

var styled = { TabList: TabListStyle, ActionButton: ActionButtonStyle, Tab: TabStyle, Panel: PanelStyle };
var helpers = { simpleSwitch: sortable.arrayMove, deleteHelper: deleteHelper };

exports.AsyncPanel = AsyncPanelComponent;
exports.DragTab = DragTab;
exports.DragTabList = DragTabList;
exports.ExtraButton = ExtraButton;
exports.Panel = PanelComponent;
exports.PanelList = PanelList;
exports.Tab = Tab;
exports.TabList = TabListComponent;
exports.Tabs = Tabs;
exports.helpers = helpers;
exports.styled = styled;
