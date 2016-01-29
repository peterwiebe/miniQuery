function miniQuery(selector) {

  var targets = document.querySelectorAll(selector)

  targets.hide = function() {
    for (var i = 0; i < targets.length; i++) {
      targets[i].style.visibility = "hidden"
    }
  }

  targets.show = function() {
    for (var i = 0; i < targets.length; i++) {
      targets[i].style.visibility = "visible"
    }
  }

  targets.addClass = function(className) {
    for (var i = 0; i < targets.length; i++) {
      targets[i].classList.add(className)
    }
  }

  targets.removeClass = function(className) {
    for (var i = 0; i < targets.length; i++) {
      targets[i].classList.remove(className)
    }
  }

  targets.on = function(eventName, eventHandler) {
    for (var i = 0; i < targets.length; i++) {
      targets[i].addEventListener(eventName, eventHandler)
    }
  }

  targets.trigger = function(eventName) {
    var event = new Event(eventName)
    for (var i = 0; i < targets.length; i++) {
      targets[i].dispatchEvent(event);
    }
  }

  targets.ajax = function(options) {
    var url = options["url"];
    var type = options["type"];
    var promise = new Promise(function(resolve, reject) {
      var query = new XMLHttpRequest();
      query.open(type, url, true);

      query.onload = function() {
        if (query.status >= 200 && query.status < 400) {
          resolve(query.response);
        } else {
          reject(query.response);
        }
      }
      query.send()
    })
    return promise
  }
  return targets
}

var $ = function(selector) {
  return miniQuery(selector)
}
