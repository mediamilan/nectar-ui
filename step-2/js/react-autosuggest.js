'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var languages = [{
  name: 'C',
  year: 1972
}, {
  name: 'C#',
  year: 2000
}, {
  name: 'C++',
  year: 1983
}, {
  name: 'Clojure',
  year: 2007
}, {
  name: 'Elm',
  year: 2012
}, {
  name: 'Go',
  year: 2009
}, {
  name: 'Haskell',
  year: 1990
}, {
  name: 'Java',
  year: 1995
}, {
  name: 'Javascript',
  year: 1995
}, {
  name: 'Perl',
  year: 1987
}, {
  name: 'PHP',
  year: 1995
}, {
  name: 'Python',
  year: 1991
}, {
  name: 'Ruby',
  year: 1995
}, {
  name: 'Scala',
  year: 2003
}];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  var escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  var regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(function (language) {
    return regex.test(language.name);
  });
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return React.createElement(
    'span',
    null,
    suggestion.name
  );
}

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      value: '',
      suggestions: getSuggestions('')
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSuggestionsUpdateRequested = _this.onSuggestionsUpdateRequested.bind(_this);
    _this.saveInput = _this.saveInput.bind(_this);
    return _this;
  }

  App.prototype.componentDidMount = function componentDidMount() {
    this.input.focus();
  };

  App.prototype.onChange = function onChange(event, _ref) {
    var newValue = _ref.newValue;
    var method = _ref.method;

    this.setState({
      value: newValue
    });
  };

  App.prototype.onSuggestionsUpdateRequested = function onSuggestionsUpdateRequested(_ref2) {
    var value = _ref2.value;

    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  App.prototype.saveInput = function saveInput(autosuggest) {
    this.input = autosuggest.input;
  };

  App.prototype.render = function render() {
    var _state = this.state;
    var value = _state.value;
    var suggestions = _state.suggestions;

    var inputProps = {
      placeholder: "Type 'c'",
      value: value,	  
      onChange: this.onChange
    };

    return React.createElement(Autosuggest, { suggestions: suggestions,
      onSuggestionsUpdateRequested: this.onSuggestionsUpdateRequested,
      getSuggestionValue: getSuggestionValue,
      renderSuggestion: renderSuggestion,
      inputProps: inputProps,
      ref: this.saveInput });
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('reactAutosuggest'));