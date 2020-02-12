// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configWaypoints = exports.domElementos = void 0;

/* eslint-disable */
var domElementos = {
  formularioRegistrarse: $('#formularioRegistrarse'),
  formularioIniciarSesion: $('#formularioIniciarSesion'),
  iniciarSesionInfo: {
    email: $('#formularioIniciarSesion input[type=text]'),
    password: $('#formularioIniciarSesion input[type=password] ')
  },
  registrarseUsuarioInfo: {
    nombre: $('#registrarseNombre'),
    email: $('#registrarseEmail'),
    contraseña: $('#registrarseContraseña'),
    confirmarContraseña: $('#registrarseConfirmarContraseña')
  },
  producto: {
    articuloId: $('.producto__titulo').attr('id'),
    articulo: $('.producto__titulo').text().trim(),
    categoria: $('.producto__categoria').text().trim(),
    descripcion: $('.producto__texto').text().trim(),
    precio: $('.producto__titulo span').text().trim(),
    imagen: $('.producto__fotografiaPrincipal img').attr('src'),
    slug: $('.producto__slug').val(),
    stock: $('.producto__stock').val()
  },
  productoIcono: {
    articulo: $('#articuloProductoIcono').text().trim(),
    categoria: $('#categoriaProductoIcono').text().trim(),
    descripcion: $('#descripcionProductoIcono').text().trim(),
    precio: $('#precioProductoIcono').text().trim(),
    imagen: $('#imagenProductoIcono').attr('src'),
    slug: $('#slugProductoIcono').val(),
    stock: $('#stockProductoIcono').val(),
    cantidad: '1'
  },
  btnCerrarSesion: $('#cerrarSesion'),
  btnAgregarCarrito: $('#agregarCarrito'),
  iconoAgregarCarrito: $('.iconoAgregarCarrito'),
  btnEliminarCarrito: $('.carrito__eliminar a'),
  btnComprar: $('#btnComprar'),
  btnPublicarReseña: $('#btnPublicarReseña'),
  contenedoresInformacionPersonalUsuarios: $('.producto__reseniaUsuario'),
  inputPuntajeReseña: $('#puntajeReseña'),
  inputContenidoReseña: $('#contenidoReseña'),
  infoAjustes: {
    inputNombreAjustes: $('#nombreAjustes'),
    inputCorreoAjustes: $('#correoAjustes'),
    inputFotoAjustes: $('#fotoAjustes')
  },
  formularioAjustes: $('#formularioAjustes'),
  idUsuario: $('#usuarioId'),
  misComprasContenedor: $('#misComprasContenedor'),
  misReseñasContenedor: $('#misReseñasContenedor'),
  perfilContenido: $('.perfil__contenido'),
  contenedorCompraUnica: $('.popup__detallesComprasContenido'),
  inputReseñaPuntuacion: $('#puntajeEditarReseña'),
  inputReseñaContenido: $('#contenidoEditarReseña'),
  inputIdResenia: $('#idResenia'),
  btnEditarReseña: $('#editarReseña'),
  contraseñaActualInput: $('#contraseñaActual'),
  nuevaContraseñaInput: $('#nuevaContraseña'),
  confirmarContraseñaInput: $('#confirmarContraseña'),
  formularioContraseña: $('#formularioContraseña'),
  formularioRecuperarContraseña: $('#formularioRecuperarContrasenia'),
  inputEmailRecuperarContrasenia: $('#inputCorreoRecuperarContrasenia'),
  formularioResetearContraseña: $('#formularioResetearContraseña'),
  inputContraseñaResetear: $('#inputContraseñaResetear'),
  inputConfirmarContraseñaResetear: $('#inputConfirmarContraseñaResetear'),
  productoMasVendidoTitulo1: $('#productoMasVendidoTitulo-1'),
  productoMasVendidoTitulo2: $('#productoMasVendidoTitulo-2'),
  productoMasVendidoTitulo3: $('#productoMasVendidoTitulo-3'),
  productoMasVendidoDescripcion1: $('#productoMasVendidoDescripcion-1'),
  productoMasVendidoDescripcion2: $('#productoMasVendidoDescripcion-2'),
  productoMasVendidoDescripcion3: $('#productoMasVendidoDescripcion-3')
}; // Da funcionalidad a la navegación sticky y activa las animaciones cuando se hace scroll

exports.domElementos = domElementos;

var configWaypoints = function configWaypoints() {
  // Sticky navigation
  $('.caracteristicas').waypoint(function (direction) {
    if (direction == 'down') {
      $('.nav').addClass('sticky');
      $('.nav__lista').css({
        background: '#232121'
      });
      $('.nav__usuarioDropdown').css({
        background: '#232121'
      });
      $('.nav__usuarioDropdown').css({
        height: '7rem',
        width: '100%',
        padding: '1rem',
        'margin-right': '0'
      });
    } else {
      $('.nav').removeClass('sticky');
      $('.nav').css({
        opacity: '0.9'
      });
      $('.nav__lista').css({
        background: 'transparent'
      });
      $('.nav__usuarioDropdown').css({
        background: ''
      });
      $('.nav__usuarioDropdown').css({
        height: 'auto',
        width: 'auto',
        padding: '0',
        'margin-right': '1.5rem'
      });
    }
  }, {
    offset: '80px;'
  }); //Animaciones de las secciones

  $('.caracteristicas').waypoint(function (direction) {
    $('.caracteristicas__contenido').css({
      opacity: '1'
    });
  }, {
    offset: '10%'
  });
  $('.testimonial').waypoint(function (direction) {
    $('.testimonial__contenedorGrande').css({
      opacity: '1'
    });
  }, {
    offset: '10%'
  });
};

exports.configWaypoints = configWaypoints;
},{}],"../../node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"../../node_modules/axios/lib/helpers/bind.js":[function(require,module,exports) {
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],"../../node_modules/is-buffer/index.js":[function(require,module,exports) {
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
module.exports = function isBuffer(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};
},{}],"../../node_modules/axios/lib/utils.js":[function(require,module,exports) {
'use strict';

var bind = require('./helpers/bind');
var isBuffer = require('is-buffer');

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

},{"./helpers/bind":"../../node_modules/axios/lib/helpers/bind.js","is-buffer":"../../node_modules/is-buffer/index.js"}],"../../node_modules/axios/lib/helpers/buildURL.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/core/InterceptorManager.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/core/transformData.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

},{"./../utils":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/cancel/isCancel.js":[function(require,module,exports) {
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],"../../node_modules/axios/lib/helpers/normalizeHeaderName.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/core/enhanceError.js":[function(require,module,exports) {
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

},{}],"../../node_modules/axios/lib/core/createError.js":[function(require,module,exports) {
'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"../../node_modules/axios/lib/core/enhanceError.js"}],"../../node_modules/axios/lib/core/settle.js":[function(require,module,exports) {
'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":"../../node_modules/axios/lib/core/createError.js"}],"../../node_modules/axios/lib/helpers/parseHeaders.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/helpers/isURLSameOrigin.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

},{"./../utils":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/helpers/cookies.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

},{"./../utils":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/adapters/xhr.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var buildURL = require('./../helpers/buildURL');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = require('./../helpers/cookies');

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

},{"./../utils":"../../node_modules/axios/lib/utils.js","./../core/settle":"../../node_modules/axios/lib/core/settle.js","./../helpers/buildURL":"../../node_modules/axios/lib/helpers/buildURL.js","./../helpers/parseHeaders":"../../node_modules/axios/lib/helpers/parseHeaders.js","./../helpers/isURLSameOrigin":"../../node_modules/axios/lib/helpers/isURLSameOrigin.js","../core/createError":"../../node_modules/axios/lib/core/createError.js","./../helpers/cookies":"../../node_modules/axios/lib/helpers/cookies.js"}],"../../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../../node_modules/axios/lib/defaults.js":[function(require,module,exports) {
var process = require("process");
'use strict';

var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

},{"./utils":"../../node_modules/axios/lib/utils.js","./helpers/normalizeHeaderName":"../../node_modules/axios/lib/helpers/normalizeHeaderName.js","./adapters/http":"../../node_modules/axios/lib/adapters/xhr.js","./adapters/xhr":"../../node_modules/axios/lib/adapters/xhr.js","process":"../../node_modules/process/browser.js"}],"../../node_modules/axios/lib/helpers/isAbsoluteURL.js":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"../../node_modules/axios/lib/helpers/combineURLs.js":[function(require,module,exports) {
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],"../../node_modules/axios/lib/core/dispatchRequest.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');
var isAbsoluteURL = require('./../helpers/isAbsoluteURL');
var combineURLs = require('./../helpers/combineURLs');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"./../utils":"../../node_modules/axios/lib/utils.js","./transformData":"../../node_modules/axios/lib/core/transformData.js","../cancel/isCancel":"../../node_modules/axios/lib/cancel/isCancel.js","../defaults":"../../node_modules/axios/lib/defaults.js","./../helpers/isAbsoluteURL":"../../node_modules/axios/lib/helpers/isAbsoluteURL.js","./../helpers/combineURLs":"../../node_modules/axios/lib/helpers/combineURLs.js"}],"../../node_modules/axios/lib/core/mergeConfig.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};

},{"../utils":"../../node_modules/axios/lib/utils.js"}],"../../node_modules/axios/lib/core/Axios.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"./../utils":"../../node_modules/axios/lib/utils.js","../helpers/buildURL":"../../node_modules/axios/lib/helpers/buildURL.js","./InterceptorManager":"../../node_modules/axios/lib/core/InterceptorManager.js","./dispatchRequest":"../../node_modules/axios/lib/core/dispatchRequest.js","./mergeConfig":"../../node_modules/axios/lib/core/mergeConfig.js"}],"../../node_modules/axios/lib/cancel/Cancel.js":[function(require,module,exports) {
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],"../../node_modules/axios/lib/cancel/CancelToken.js":[function(require,module,exports) {
'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":"../../node_modules/axios/lib/cancel/Cancel.js"}],"../../node_modules/axios/lib/helpers/spread.js":[function(require,module,exports) {
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],"../../node_modules/axios/lib/axios.js":[function(require,module,exports) {
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"../../node_modules/axios/lib/utils.js","./helpers/bind":"../../node_modules/axios/lib/helpers/bind.js","./core/Axios":"../../node_modules/axios/lib/core/Axios.js","./core/mergeConfig":"../../node_modules/axios/lib/core/mergeConfig.js","./defaults":"../../node_modules/axios/lib/defaults.js","./cancel/Cancel":"../../node_modules/axios/lib/cancel/Cancel.js","./cancel/CancelToken":"../../node_modules/axios/lib/cancel/CancelToken.js","./cancel/isCancel":"../../node_modules/axios/lib/cancel/isCancel.js","./helpers/spread":"../../node_modules/axios/lib/helpers/spread.js"}],"../../node_modules/axios/index.js":[function(require,module,exports) {
module.exports = require('./lib/axios');
},{"./lib/axios":"../../node_modules/axios/lib/axios.js"}],"models/cerrarSesion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cerrarSesion = void 0;

require("regenerator-runtime/runtime");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var cerrarSesion =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _axios.default)({
              method: 'GET',
              url: 'http://localhost:3000/api/v1/usuarios/cerrarSesion'
            });

          case 3:
            res = _context.sent;
            if (res.data.status = 'success') location.reload(true);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.response);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function cerrarSesion() {
    return _ref.apply(this, arguments);
  };
}();

exports.cerrarSesion = cerrarSesion;
},{"regenerator-runtime/runtime":"../../node_modules/regenerator-runtime/runtime.js","axios":"../../node_modules/axios/index.js"}],"utils/cookie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerCookiePorNombre = exports.eliminarCookie = exports.crearCookie = void 0;

/* eslint-disable */
var crearCookie = function crearCookie(respuesta) {
  document.cookie = "jwt=".concat(respuesta.data.token, "; max-age=").concat(60 * 60 * 24 * 7, " path=/");
  document.cookie = 'username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/';
};

exports.crearCookie = crearCookie;

var eliminarCookie = function eliminarCookie() {
  document.cookie = 'jwt=;expires=Thu, path=/ 01 Jan 1970 00:00:01 GMT; path=/';
};

exports.eliminarCookie = eliminarCookie;

var obtenerCookiePorNombre = function obtenerCookiePorNombre(nombre) {
  var b = document.cookie.match('(^|[^;]+)\\s*' + nombre + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
};

exports.obtenerCookiePorNombre = obtenerCookiePorNombre;
},{}],"models/peticiones.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Peticion =
/*#__PURE__*/
function () {
  function Peticion() {
    _classCallCheck(this, Peticion);
  }

  _createClass(Peticion, [{
    key: "hacerPeticionGetAnidadaUsuarios",
    value: function () {
      var _hacerPeticionGetAnidadaUsuarios = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(id, tipo) {
        var consulta;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _axios.default)({
                  method: 'GET',
                  url: "http://localhost:3000/api/v1/usuarios/".concat(id, "/").concat(tipo)
                });

              case 3:
                consulta = _context.sent;
                return _context.abrupt("return", consulta);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                alert('Algo salió mal');
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function hacerPeticionGetAnidadaUsuarios(_x, _x2) {
        return _hacerPeticionGetAnidadaUsuarios.apply(this, arguments);
      }

      return hacerPeticionGetAnidadaUsuarios;
    }()
  }, {
    key: "hacerPeticionPost",
    value: function () {
      var _hacerPeticionPost = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(url, data) {
        var consulta;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _axios.default)({
                  method: 'POST',
                  url: url,
                  data: data
                });

              case 3:
                consulta = _context2.sent;
                return _context2.abrupt("return", consulta);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                alert('Algo salió mal');
                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function hacerPeticionPost(_x3, _x4) {
        return _hacerPeticionPost.apply(this, arguments);
      }

      return hacerPeticionPost;
    }()
  }, {
    key: "hacerPeticionPatch",
    value: function () {
      var _hacerPeticionPatch = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(url, data) {
        var consulta;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return (0, _axios.default)({
                  method: 'PATCH',
                  url: url,
                  data: data
                });

              case 3:
                consulta = _context3.sent;
                return _context3.abrupt("return", consulta);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                alert('Algo salió mal');
                console.log(_context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function hacerPeticionPatch(_x5, _x6) {
        return _hacerPeticionPatch.apply(this, arguments);
      }

      return hacerPeticionPatch;
    }()
  }, {
    key: "hacerPeticionDelete",
    value: function () {
      var _hacerPeticionDelete = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(url) {
        var consulta;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return (0, _axios.default)({
                  method: 'DELETE',
                  url: url
                });

              case 3:
                consulta = _context4.sent;
                return _context4.abrupt("return", consulta);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                alert('Algo salió mal');
                console.log(_context4.t0);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function hacerPeticionDelete(_x7) {
        return _hacerPeticionDelete.apply(this, arguments);
      }

      return hacerPeticionDelete;
    }()
  }, {
    key: "hacerPeticionGet",
    value: function () {
      var _hacerPeticionGet = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(ruta, id) {
        var respuesta;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return (0, _axios.default)({
                  url: "http://localhost:3000/api/v1/".concat(ruta, "/").concat(id),
                  method: 'GET'
                });

              case 3:
                respuesta = _context5.sent;
                return _context5.abrupt("return", respuesta);

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                alert('Algo salió mal');
                console.log(_context5.t0);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function hacerPeticionGet(_x8, _x9) {
        return _hacerPeticionGet.apply(this, arguments);
      }

      return hacerPeticionGet;
    }()
  }, {
    key: "hacerPeticionGetAnidada",
    value: function () {
      var _hacerPeticionGetAnidada = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(ruta, rutaAnidada, idPrimario, idSecundario) {
        var respuesta;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return (0, _axios.default)({
                  url: "http://localhost:3000/api/v1/".concat(ruta, "/").concat(idPrimario, "/").concat(rutaAnidada, "/").concat(idSecundario),
                  method: 'GET'
                });

              case 3:
                respuesta = _context6.sent;
                return _context6.abrupt("return", respuesta);

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                alert('Algo salió mal');
                console.log(_context6.t0);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 7]]);
      }));

      function hacerPeticionGetAnidada(_x10, _x11, _x12, _x13) {
        return _hacerPeticionGetAnidada.apply(this, arguments);
      }

      return hacerPeticionGetAnidada;
    }()
  }, {
    key: "hacerPeticionPatchAnidada",
    value: function () {
      var _hacerPeticionPatchAnidada = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(ruta, rutaAnidada, idPrincipal, idSecundario, data) {
        var consulta;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return (0, _axios.default)({
                  method: 'PATCH',
                  url: "http://localhost:3000/api/v1/".concat(ruta, "/").concat(idPrincipal, "/").concat(rutaAnidada, "/").concat(idSecundario),
                  data: data
                });

              case 3:
                consulta = _context7.sent;
                return _context7.abrupt("return", consulta);

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                alert('Algo salió mal');
                console.log(_context7.t0);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 7]]);
      }));

      function hacerPeticionPatchAnidada(_x14, _x15, _x16, _x17, _x18) {
        return _hacerPeticionPatchAnidada.apply(this, arguments);
      }

      return hacerPeticionPatchAnidada;
    }()
  }, {
    key: "obtenerUsuarios",
    value: function () {
      var _obtenerUsuarios = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(idsUsuarios) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", Promise.all(idsUsuarios.map(function (id) {
                  return _this.hacerPeticionGet('usuarios', id);
                })));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function obtenerUsuarios(_x19) {
        return _obtenerUsuarios.apply(this, arguments);
      }

      return obtenerUsuarios;
    }()
  }]);

  return Peticion;
}();

exports.default = Peticion;
},{"regenerator-runtime/runtime":"../../node_modules/regenerator-runtime/runtime.js","axios":"../../node_modules/axios/index.js"}],"models/registrarse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Registrarse =
/*#__PURE__*/
function () {
  function Registrarse(nuevoUsuario) {
    _classCallCheck(this, Registrarse);

    this.nombre = nuevoUsuario.nombre;
    this.email = nuevoUsuario.email;
    this.contraseña = nuevoUsuario.contraseña;
    this.confirmarContraseña = nuevoUsuario.confirmarContraseña;
  }

  _createClass(Registrarse, [{
    key: "enviarPeticion",
    value: function () {
      var _enviarPeticion = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var consulta;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _axios.default)({
                  method: 'POST',
                  url: 'http://localhost:3000/api/v1/usuarios/registrarse',
                  data: {
                    nombre: this.nombre,
                    email: this.email,
                    contraseña: this.contraseña,
                    confirmarContraseña: this.confirmarContraseña
                  }
                });

              case 3:
                consulta = _context.sent;
                return _context.abrupt("return", consulta);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                alert('Algo salió mal');
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function enviarPeticion() {
        return _enviarPeticion.apply(this, arguments);
      }

      return enviarPeticion;
    }()
  }]);

  return Registrarse;
}();

exports.default = Registrarse;
},{"regenerator-runtime/runtime":"../../node_modules/regenerator-runtime/runtime.js","axios":"../../node_modules/axios/index.js"}],"models/iniciarSesion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IniciarSesion =
/*#__PURE__*/
function () {
  function IniciarSesion(usuario) {
    _classCallCheck(this, IniciarSesion);

    this.email = usuario.email;
    this.password = usuario.password;
  }

  _createClass(IniciarSesion, [{
    key: "enviarPeticion",
    value: function () {
      var _enviarPeticion = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var consulta;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _axios.default)({
                  method: 'POST',
                  url: 'http://localhost:3000/api/v1/usuarios/iniciarSesion',
                  data: {
                    email: this.email,
                    contraseña: this.password
                  }
                });

              case 3:
                consulta = _context.sent;
                console.log(consulta);
                return _context.abrupt("return", consulta);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                alert('Algo salió mal');

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function enviarPeticion() {
        return _enviarPeticion.apply(this, arguments);
      }

      return enviarPeticion;
    }()
  }]);

  return IniciarSesion;
}();

exports.default = IniciarSesion;
},{"regenerator-runtime/runtime":"../../node_modules/regenerator-runtime/runtime.js","axios":"../../node_modules/axios/index.js"}],"models/carrito.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Carrito =
/*#__PURE__*/
function () {
  function Carrito() {
    _classCallCheck(this, Carrito);
  }

  _createClass(Carrito, [{
    key: "agregarProducto",
    value: function () {
      var _agregarProducto = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(producto) {
        var consulta;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _axios.default)({
                  method: 'POST',
                  url: 'http://localhost:3000/api/v1/carrito/agregar',
                  data: {
                    articulo: producto.articulo,
                    categoria: producto.categoria,
                    descripcion: producto.descripcion,
                    precio: producto.precio,
                    imagen: producto.imagen,
                    cantidad: producto.cantidad,
                    slug: producto.slug,
                    stock: producto.stock
                  }
                });

              case 3:
                consulta = _context.sent;
                return _context.abrupt("return", consulta);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                alert('Algo salió mal');

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function agregarProducto(_x) {
        return _agregarProducto.apply(this, arguments);
      }

      return agregarProducto;
    }() // Se envia la cantidad del producto que se iba a eliminar para que se vuelva a sumar al stock del producto

  }, {
    key: "eliminarProducto",
    value: function () {
      var _eliminarProducto = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(productoId, cantidad, nombre) {
        var consulta;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _axios.default)({
                  method: 'DELETE',
                  url: "http://localhost:3000/api/v1/carrito/".concat(productoId),
                  data: {
                    cantidad: cantidad,
                    nombre: nombre
                  }
                });

              case 3:
                consulta = _context2.sent;
                return _context2.abrupt("return", consulta.data.status === 'Exito' ? true : false);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                alert('Algo salió mal');

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function eliminarProducto(_x2, _x3, _x4) {
        return _eliminarProducto.apply(this, arguments);
      }

      return eliminarProducto;
    }()
  }]);

  return Carrito;
}();

exports.default = Carrito;
},{"regenerator-runtime/runtime":"../../node_modules/regenerator-runtime/runtime.js","axios":"../../node_modules/axios/index.js"}],"models/compra.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Compra =
/*#__PURE__*/
function () {
  function Compra(id) {
    _classCallCheck(this, Compra);

    this.id = id;
  }

  _createClass(Compra, [{
    key: "hacerPeticionStripe",
    value: function () {
      var _hacerPeticionStripe = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var stripe, consulta;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                stripe = Stripe('pk_test_ZDcXOQ8zKStcrxrjeTz1ynAN00aquyrddG');
                _context.next = 4;
                return (0, _axios.default)("http://localhost:3000/api/v1/compra/checkout-session/".concat(this.id));

              case 4:
                consulta = _context.sent;
                _context.next = 7;
                return stripe.redirectToCheckout({
                  sessionId: consulta.data.session.id
                });

              case 7:
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function hacerPeticionStripe() {
        return _hacerPeticionStripe.apply(this, arguments);
      }

      return hacerPeticionStripe;
    }()
  }, {
    key: "mostrarProductosConMasCompras",
    value: function () {
      var _mostrarProductosConMasCompras = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var respuesta;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _axios.default)({
                  url: "http://localhost:3000/api/v1/productos/productosMasVendidos",
                  method: 'GET'
                });

              case 3:
                respuesta = _context2.sent;
                return _context2.abrupt("return", respuesta);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                alert('Algo salió mal');
                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function mostrarProductosConMasCompras() {
        return _mostrarProductosConMasCompras.apply(this, arguments);
      }

      return mostrarProductosConMasCompras;
    }()
  }]);

  return Compra;
}();

exports.default = Compra;
},{"regenerator-runtime/runtime":"../../node_modules/regenerator-runtime/runtime.js","axios":"../../node_modules/axios/index.js"}],"models/reseña.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _axios = _interopRequireDefault(require("axios"));

var _peticiones = _interopRequireDefault(require("../models/peticiones"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Reseña =
/*#__PURE__*/
function (_Peticion) {
  _inherits(Reseña, _Peticion);

  function Reseña(infoReseña) {
    var _this;

    _classCallCheck(this, Reseña);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Reseña).call(this));
    _this.idProducto = infoReseña.id;
    _this.puntuacion = infoReseña.puntuacion;
    _this.reseña = infoReseña.reseña;
    return _this;
  }

  _createClass(Reseña, [{
    key: "validarCreacionRese\xF1a",
    value: function validarCreacionReseA(respuesta) {
      if (respuesta.data.status !== 'Exito') {
        if (respuesta.data.message.includes('duplicate key error')) {
          return 'No puedes escribir más de una reseña';
        }

        if (respuesta.data.message.includes('Debes de comprar el producto antes de hacer la reseña')) {
          return 'Debes de comprar el producto antes de hacer la reseña';
        }
      } else {
        return true;
      }
    }
  }, {
    key: "crear",
    value: function () {
      var _crear = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var respuesta, mensaje;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _get(_getPrototypeOf(Reseña.prototype), "hacerPeticionPost", this).call(this, "http://localhost:3000/api/v1/productos/".concat(this.idProducto, "/resenias"), {
                  reseña: this.reseña,
                  puntuacion: this.puntuacion
                });

              case 2:
                respuesta = _context.sent;
                console.log(respuesta);
                mensaje = this.validarCreacionReseña(respuesta);
                return _context.abrupt("return", mensaje);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function crear() {
        return _crear.apply(this, arguments);
      }

      return crear;
    }()
  }]);

  return Reseña;
}(_peticiones.default);

exports.default = Reseña;
},{"regenerator-runtime/runtime":"../../node_modules/regenerator-runtime/runtime.js","axios":"../../node_modules/axios/index.js","../models/peticiones":"models/peticiones.js"}],"models/perfil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _axios = _interopRequireDefault(require("axios"));

var _peticiones = _interopRequireDefault(require("../models/peticiones"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Perfil =
/*#__PURE__*/
function (_Peticion) {
  _inherits(Perfil, _Peticion);

  function Perfil() {
    _classCallCheck(this, Perfil);

    return _possibleConstructorReturn(this, _getPrototypeOf(Perfil).call(this));
  }

  _createClass(Perfil, [{
    key: "editar",
    value: function () {
      var _editar = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(data, tipo) {
        var url, respuesta;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = tipo === 'contraseña' ? 'http://localhost:3000/api/v1/usuarios/actualizarMiContrasenia' : 'http://localhost:3000/api/v1/usuarios/actualizarMiPerfil';
                _context.next = 3;
                return _get(_getPrototypeOf(Perfil.prototype), "hacerPeticionPatch", this).call(this, url, data);

              case 3:
                respuesta = _context.sent;
                return _context.abrupt("return", respuesta);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function editar(_x, _x2) {
        return _editar.apply(this, arguments);
      }

      return editar;
    }()
  }, {
    key: "mostrarMisCompras",
    value: function () {
      var _mostrarMisCompras = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(idUsuario) {
        var compras;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _get(_getPrototypeOf(Perfil.prototype), "hacerPeticionGetAnidadaUsuarios", this).call(this, idUsuario, 'compras');

              case 2:
                compras = _context2.sent;
                return _context2.abrupt("return", compras.data.compras);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function mostrarMisCompras(_x3) {
        return _mostrarMisCompras.apply(this, arguments);
      }

      return mostrarMisCompras;
    }()
  }, {
    key: "obtenerCompra",
    value: function () {
      var _obtenerCompra = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(idCompra) {
        var compra;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _get(_getPrototypeOf(Perfil.prototype), "hacerPeticionGet", this).call(this, 'compra', idCompra);

              case 2:
                compra = _context3.sent;
                return _context3.abrupt("return", compra.data.data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function obtenerCompra(_x4) {
        return _obtenerCompra.apply(this, arguments);
      }

      return obtenerCompra;
    }()
  }, {
    key: "obtenerResenia",
    value: function () {
      var _obtenerResenia = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(idProducto, idResenia) {
        var resenia;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _get(_getPrototypeOf(Perfil.prototype), "hacerPeticionGetAnidada", this).call(this, 'productos', 'resenias', idProducto, idResenia);

              case 2:
                resenia = _context4.sent;
                return _context4.abrupt("return", resenia.data.data);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function obtenerResenia(_x5, _x6) {
        return _obtenerResenia.apply(this, arguments);
      }

      return obtenerResenia;
    }()
  }, {
    key: "mostrarMisRese\xF1as",
    value: function () {
      var _mostrarMisReseAs = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(idUsuario) {
        var reseñas;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _get(_getPrototypeOf(Perfil.prototype), "hacerPeticionGetAnidadaUsuarios", this).call(this, idUsuario, 'resenias');

              case 2:
                reseñas = _context5.sent;
                return _context5.abrupt("return", reseñas.data.data.reseñas);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function mostrarMisReseAs(_x7) {
        return _mostrarMisReseAs.apply(this, arguments);
      }

      return mostrarMisReseAs;
    }()
  }, {
    key: "editarRese\xF1a",
    value: function () {
      var _editarReseA = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(idProducto, idResenia, data) {
        var respuesta;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _get(_getPrototypeOf(Perfil.prototype), "hacerPeticionPatchAnidada", this).call(this, 'productos', 'resenias', idProducto, idResenia, data);

              case 2:
                respuesta = _context6.sent;
                return _context6.abrupt("return", respuesta);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function editarReseA(_x8, _x9, _x10) {
        return _editarReseA.apply(this, arguments);
      }

      return editarReseA;
    }()
  }, {
    key: "eliminarResenia",
    value: function () {
      var _eliminarResenia = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(idProducto, idResenia) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _get(_getPrototypeOf(Perfil.prototype), "hacerPeticionDelete", this).call(this, "http://localhost:3000/api/v1/productos/".concat(idProducto, "/resenias/").concat(idResenia));

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function eliminarResenia(_x11, _x12) {
        return _eliminarResenia.apply(this, arguments);
      }

      return eliminarResenia;
    }()
  }, {
    key: "recuperarContrasenia",
    value: function () {
      var _recuperarContrasenia = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(email) {
        var respuesta;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _get(_getPrototypeOf(Perfil.prototype), "hacerPeticionPost", this).call(this, "http://localhost:3000/api/v1/usuarios/recuperarContrasenia", email);

              case 2:
                respuesta = _context8.sent;
                return _context8.abrupt("return", respuesta);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function recuperarContrasenia(_x13) {
        return _recuperarContrasenia.apply(this, arguments);
      }

      return recuperarContrasenia;
    }()
  }, {
    key: "resetearContrasenia",
    value: function () {
      var _resetearContrasenia = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(infoResetearContraseña, token) {
        var respuesta;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _get(_getPrototypeOf(Perfil.prototype), "hacerPeticionPatch", this).call(this, "http://localhost:3000/api/v1/usuarios/resetearContrasenia/".concat(token), {
                  contraseña: infoResetearContraseña.contraseña,
                  confirmarContraseña: infoResetearContraseña.confirmarContraseña
                });

              case 2:
                respuesta = _context9.sent;
                return _context9.abrupt("return", respuesta);

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function resetearContrasenia(_x14, _x15) {
        return _resetearContrasenia.apply(this, arguments);
      }

      return resetearContrasenia;
    }()
  }]);

  return Perfil;
}(_peticiones.default);

exports.default = Perfil;
},{"regenerator-runtime/runtime":"../../node_modules/regenerator-runtime/runtime.js","axios":"../../node_modules/axios/index.js","../models/peticiones":"models/peticiones.js"}],"../../node_modules/sweetalert2/dist/sweetalert2.all.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*!
* sweetalert2 v8.17.6
* Released under the MIT License.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.Sweetalert2 = factory();
})(this, function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Returns the array ob object values (Object.values isn't supported in IE11)
   * @param obj
   */


  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */


  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */


  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Standardise console errors
   * @param message
   */


  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */


  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */


  var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */


  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };

  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var argsToParams = function argsToParams(args) {
    var params = {};

    switch (_typeof(args[0])) {
      case 'object':
        _extends(params, args[0]);

        break;

      default:
        ['title', 'html', 'type'].forEach(function (name, index) {
          switch (_typeof(args[index])) {
            case 'string':
              params[name] = args[index];
              break;

            case 'undefined':
              break;

            default:
              error("Unexpected type of ".concat(name, "! Expected \"string\", got ").concat(_typeof(args[index])));
          }
        });
    }

    return params;
  };

  var swalPrefix = 'swal2-';

  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };

  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);
  var states = {
    previousBodyPadding: null
  };

  var hasClass = function hasClass(elem, className) {
    return elem.classList.contains(className);
  };

  var removeCustomClasses = function removeCustomClasses(elem) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, customClass, className) {
    removeCustomClasses(elem);

    if (customClass && customClass[className]) {
      if (typeof customClass[className] !== 'string' && !customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(customClass[className]), "\""));
      }

      addClass(elem, customClass[className]);
    }
  };

  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }

  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };

  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };

  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };

  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };

  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? value + 'px' : value;
    } else {
      elem.style.removeProperty(property);
    }
  };

  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.opacity = '';
    elem.style.display = display;
  };

  var hide = function hide(elem) {
    elem.style.opacity = '';
    elem.style.display = 'none';
  };

  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation


  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };

  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119


  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };

  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };

  var getContainer = function getContainer() {
    return document.body.querySelector('.' + swalClasses.container);
  };

  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector('.' + className);
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };

  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll('.' + swalClasses.icon));
  };

  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };

  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };

  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };

  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };

  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };

  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };

  var getConfirmButton = function getConfirmButton() {
    return elementBySelector('.' + swalClasses.actions + ' .' + swalClasses.confirm);
  };

  var getCancelButton = function getCancelButton() {
    return elementBySelector('.' + swalClasses.actions + ' .' + swalClasses.cancel);
  };

  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };

  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };

  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };

  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js


  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";

  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };

  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };

  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };

  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  }; // Detect Node env


  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;
    container.innerHTML = sweetHTML;
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // JQuery element(s)
    } else if (_typeof(param) === 'object') {
      handleJqueryElem(target, param); // Plain string
    } else if (param) {
      target.innerHTML = param;
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.innerHTML = '';

    if (0 in elem) {
      for (var i = 0; i in elem; i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }(); // Measure width of scrollbar
  // https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286


  var measureScrollbar = function measureScrollbar() {
    var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    if (supportsTouch) {
      return 0;
    }

    var scrollDiv = document.createElement('div');
    scrollDiv.style.width = '50px';
    scrollDiv.style.height = '50px';
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params.customClass, 'actions'); // Render confirm button

    renderButton(confirmButton, 'confirm', params); // render Cancel Button

    renderButton(cancelButton, 'cancel', params);

    if (params.buttonsStyling) {
      handleButtonsStyling(confirmButton, cancelButton, params);
    } else {
      removeClass([confirmButton, cancelButton], swalClasses.styled);
      confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
      cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
    }

    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    }
  };

  function handleButtonsStyling(confirmButton, cancelButton, params) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params['showC' + buttonType.substring(1) + 'Button'], 'inline-block');
    button.innerHTML = params[buttonType + 'ButtonText']; // Set caption text

    button.setAttribute('aria-label', params[buttonType + 'ButtonAriaLabel']); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params.customClass, buttonType + 'Button');
    addClass(button, params[buttonType + 'ButtonClass']);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = 'grow-' + grow;

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params.customClass, 'container');

    if (params.customContainerClass) {
      // @deprecated
      addClass(container, params.customContainerClass);
    }
  };
  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */


  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };
  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      setClass(inputContainer, inputClass, params);

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input && rerender) {
      showInput(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var input = renderInputType[params.input](params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setClass = function setClass(inputContainer, inputClass, params) {
    inputContainer.className = inputClass;

    if (params.inputClass) {
      addClass(inputContainer, params.inputClass);
    }

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (params) {
    var input = getChildByClass(getContent(), swalClasses.input);

    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (params) {
    var input = getChildByClass(getContent(), swalClasses.file);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.range = function (params) {
    var range = getChildByClass(getContent(), swalClasses.range);
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    return range;
  };

  renderInputType.select = function (params) {
    var select = getChildByClass(getContent(), swalClasses.select);
    select.innerHTML = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      placeholder.innerHTML = params.inputPlaceholder;
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    return select;
  };

  renderInputType.radio = function () {
    var radio = getChildByClass(getContent(), swalClasses.radio);
    radio.innerHTML = '';
    return radio;
  };

  renderInputType.checkbox = function (params) {
    var checkbox = getChildByClass(getContent(), swalClasses.checkbox);
    var checkboxInput = getInput(getContent(), 'checkbox');
    checkboxInput.type = 'checkbox';
    checkboxInput.value = 1;
    checkboxInput.id = swalClasses.checkbox;
    checkboxInput.checked = Boolean(params.inputValue);
    var label = checkbox.querySelector('span');
    label.innerHTML = params.inputPlaceholder;
    return checkbox;
  };

  renderInputType.textarea = function (params) {
    var textarea = getChildByClass(getContent(), swalClasses.textarea);
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + popupPadding;

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = contentWidth + 'px';
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector('#' + swalClasses.content); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params.customClass, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params.customClass, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    closeButton.innerHTML = params.closeButtonHtml; // Custom class

    applyCustomClass(closeButton, params.customClass, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the icon with the given type already rendered,
    // apply the custom class without re-rendering the icon

    if (innerParams && params.type === innerParams.type && getIcon()) {
      applyCustomClass(getIcon(), params.customClass, 'icon');
      return;
    }

    hideAllIcons();

    if (!params.type) {
      return;
    }

    adjustSuccessIconBackgoundColor();

    if (Object.keys(iconTypes).indexOf(params.type) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.type]));
      show(icon); // Custom class

      applyCustomClass(icon, params.customClass, 'icon'); // Animate icon

      toggleClass(icon, "swal2-animate-".concat(params.type, "-icon"), params.animation);
    } else {
      error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params.customClass, 'image');

    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    stepEl.innerHTML = step;
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.innerHTML = '';
    var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(step);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params.customClass, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params.customClass, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Default Class


    popup.className = swalClasses.popup;

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params.customClass, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // CSS animation


    toggleClass(popup, swalClasses.noanimation, !params.animation);
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.onRender === 'function') {
      params.onRender(getPopup());
    }
  };
  /*
   * Global function to determine if SweetAlert2 popup is shown
   */


  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */


  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */


  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }
  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */


  function mixin(mixinParams) {
    var MixinSwal =
    /*#__PURE__*/
    function (_this) {
      _inherits(MixinSwal, _this);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  } // private global state for the queue feature


  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      document.body.removeAttribute('data-swal2-queue-step');
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */


  var getQueueStep = function getQueueStep() {
    return document.body.getAttribute('data-swal2-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */


  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */


  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };
  /**
   * Show spinner instead of Confirm button and disable Cancel button
   */


  var showLoading = function showLoading() {
    var popup = getPopup();

    if (!popup) {
      Swal.fire('');
    }

    popup = getPopup();
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton();
    show(actions);
    show(confirmButton);
    addClass([popup, actions], swalClasses.loading);
    confirmButton.disabled = true;
    cancelButton.disabled = true;
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;
  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };
  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */


  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */


  var stopTimer = function stopTimer() {
    return globalState.timeout && globalState.timeout.stop();
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */


  var resumeTimer = function resumeTimer() {
    return globalState.timeout && globalState.timeout.start();
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */


  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? timer.stop() : timer.start());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */


  var increaseTimer = function increaseTimer(n) {
    return globalState.timeout && globalState.timeout.increase(n);
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */


  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    type: null,
    toast: false,
    customClass: '',
    customContainerClass: '',
    target: 'body',
    backdrop: true,
    animation: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: null,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: null,
    confirmButtonClass: '',
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: null,
    cancelButtonClass: '',
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    imageUrl: null,
    imageWidth: null,
    imageHeight: null,
    imageAlt: '',
    imageClass: '',
    timer: null,
    width: null,
    padding: null,
    background: null,
    input: null,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputClass: '',
    inputAttributes: {},
    inputValidator: null,
    validationMessage: null,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: null,
    progressStepsDistance: null,
    onBeforeOpen: null,
    onOpen: null,
    onRender: null,
    onClose: null,
    onAfterClose: null,
    scrollbarPadding: true
  };
  var updatableParams = ['title', 'titleText', 'text', 'html', 'type', 'customClass', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonClass', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonClass', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeigth', 'imageAlt', 'imageClass', 'progressSteps', 'currentProgressStep'];
  var deprecatedParams = {
    customContainerClass: 'customClass',
    confirmButtonClass: 'customClass',
    cancelButtonClass: 'customClass',
    imageClass: 'customClass',
    inputClass: 'customClass'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */


  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */


  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDepreation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated();
    }
  };

  var staticMethods = Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getCancelButton: getCancelButton,
    getHeader: getHeader,
    getFooter: getFooter,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning
  });
  /**
   * Enables buttons and hide loader.
   */

  function hideLoading() {
    var innerParams = privateProps.innerParams.get(this);
    var domCache = privateProps.domCache.get(this);

    if (!innerParams.showConfirmButton) {
      hide(domCache.confirmButton);

      if (!innerParams.showCancelButton) {
        hide(domCache.actions);
      }
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
    }
  };

  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = states.previousBodyPadding + 'px';
      states.previousBodyPadding = null;
    }
  };
  /* istanbul ignore next */


  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = offset * -1 + 'px';
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = e.target === container || !isScrollable(container) && e.target.tagName !== 'INPUT' // #1603
      ;
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };
  /* istanbul ignore next */


  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933

  /* istanbul ignore next */


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };
  /* istanbul ignore next */


  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  /* istanbul ignore next */


  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  }; // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.


  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };

  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };
  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */


  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };
  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast, onAfterClose) {
    if (isToast) {
      triggerOnAfterCloseAndDispose(instance, onAfterClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerOnAfterCloseAndDispose(instance, onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup || hasClass(popup, swalClasses.hide)) {
      return;
    }

    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, swalClasses.show);
    addClass(popup, swalClasses.hide);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue || {});
  }

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose;

    if (onClose !== null && typeof onClose === 'function') {
      onClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), onAfterClose);
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };

  var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
    setTimeout(function () {
      if (onAfterClose !== null && typeof onAfterClose === 'function') {
        onAfterClose();
      }

      if (!getPopup()) {
        disposeSwal(instance);
      }
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
  }

  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
  } // @deprecated


  function enableConfirmButton() {
    warnAboutDepreation('Swal.enableConfirmButton()', "Swal.getConfirmButton().removeAttribute('disabled')");
    setButtonsDisabled(this, ['confirmButton'], false);
  } // @deprecated


  function disableConfirmButton() {
    warnAboutDepreation('Swal.disableConfirmButton()', "Swal.getConfirmButton().setAttribute('disabled', '')");
    setButtonsDisabled(this, ['confirmButton'], true);
  }

  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }

  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    domCache.validationMessage.innerHTML = error;
    var popupComputedStyle = window.getComputedStyle(domCache.popup);
    domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
    domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message


  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    warnAboutDepreation('Swal.getProgressSteps()', "const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps");
    var innerParams = privateProps.innerParams.get(this);
    return innerParams.progressSteps;
  }

  function setProgressSteps(progressSteps) {
    warnAboutDepreation('Swal.setProgressSteps()', 'Swal.update()');
    var innerParams = privateProps.innerParams.get(this);

    var updatedParams = _extends({}, innerParams, {
      progressSteps: progressSteps
    });

    renderProgressSteps(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
  }

  function showProgressSteps() {
    var domCache = privateProps.domCache.get(this);
    show(domCache.progressSteps);
  }

  function hideProgressSteps() {
    var domCache = privateProps.domCache.get(this);
    hide(domCache.progressSteps);
  }

  var Timer =
  /*#__PURE__*/
  function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  function swalOpenAnimationFinished(popup, container) {
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  }
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {Array} params
   */


  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup);
    }

    addClasses(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setScrollingVisibility(container, popup);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding);
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      });
    }
  };

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished.bind(null, popup, container));
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding) {
    iOSfix();
    IEfix();
    setAriaHidden();

    if (scrollbarPadding) {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses = function addClasses(container, popup, params) {
    if (params.animation) {
      addClass(popup, swalClasses.show);
      addClass(container, swalClasses.fade);
    }

    show(popup);
    addClass([document.documentElement, document.body, container], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && isPromise(params.inputValue)) {
      handleInputValue(instance, params);
    }
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (isPromise(params.inputOptions)) {
      showLoading();
      params.inputOptions.then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    params.inputValue.then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error('Error in inputValue promise: ' + err);
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);
      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1];
        var option = document.createElement('option');
        option.value = optionValue;
        option.innerHTML = optionLabel;

        if (params.inputValue.toString() === optionValue.toString()) {
          option.selected = true;
        }

        select.appendChild(option);
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (params.inputValue.toString() === radioValue.toString()) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        label.innerHTML = radioLabel;
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
    /**
     * Converts `inputOptions` into an array of `[value, label]`s
     * @param inputOptions
     */

  };

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        result.push([key, value]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        result.push([key, inputOptions[key]]);
      });
    }

    return result;
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmWithInput(instance, innerParams);
    } else {
      confirm(instance, innerParams, true);
    }
  };

  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      instance.disableInput();
      var validationPromise = Promise.resolve().then(function () {
        return innerParams.inputValidator(inputValue, innerParams.validationMessage);
      });
      validationPromise.then(function (validationMessage) {
        instance.enableButtons();
        instance.enableInput();

        if (validationMessage) {
          instance.showValidationMessage(validationMessage);
        } else {
          confirm(instance, innerParams, inputValue);
        }
      });
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return innerParams.preConfirm(value, innerParams.validationMessage);
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.files[0] : null;
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, innerParams, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling


  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    for (var i = 0; i < focusableElements.length; i++) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };

  var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, innerParams, dismissWith) {
    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if (arrowKeys.indexOf(e.key) !== -1) {
      handleArrows(); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows() {
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

    if (document.activeElement === confirmButton && isVisible(cancelButton)) {
      cancelButton.focus(); // and vice versa
    } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
      confirmButton.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(domCache, innerParams, dismissWith) {
    if (innerParams.toast) {
      handleToastClick(domCache, innerParams, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(domCache, innerParams, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(domCache, innerParams, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(domCache, innerParams, dismissWith) {
    domCache.container.onclick = function (e) {
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    showWarningsForParams(userParams); // Check if there is another Swal closing

    if (getPopup() && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    var innerParams = _extends({}, defaultParams, userParams);

    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);
      setupTimer(globalState, innerParams, dismissWith);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(domCache, innerParams, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247)

      domCache.container.scrollTop = 0;
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      cancelButton: getCancelButton(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      return domCache.cancelButton.focus();
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      return domCache.confirmButton.focus();
    }

    setFocus(innerParams, -1, 1);
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };
  /**
   * Updates popup parameters.
   */


  function update(params) {
    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
      }
    });
    var innerParams = privateProps.innerParams.get(this);

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  var instanceMethods = Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableConfirmButton: enableConfirmButton,
    disableConfirmButton: disableConfirmButton,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    setProgressSteps: setProgressSteps,
    showProgressSteps: showProgressSteps,
    hideProgressSteps: hideProgressSteps,
    _main: _main,
    update: update
  });
  var currentInstance; // SweetAlert constructor

  function SweetAlert() {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (typeof window === 'undefined') {
      return;
    } // Check for the existence of Promise

    /* istanbul ignore if */


    if (typeof Promise === 'undefined') {
      error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
    }

    currentInstance = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var outerParams = Object.freeze(this.constructor.argsToParams(args));
    Object.defineProperties(this, {
      params: {
        value: outerParams,
        writable: false,
        enumerable: true,
        configurable: true
      }
    });

    var promise = this._main(this.params);

    privateProps.promise.set(this, promise);
  } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


  SweetAlert.prototype.then = function (onFulfilled) {
    var promise = privateProps.promise.get(this);
    return promise.then(onFulfilled);
  };

  SweetAlert.prototype["finally"] = function (onFinally) {
    var promise = privateProps.promise.get(this);
    return promise["finally"](onFinally);
  }; // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '8.17.6';
  var Swal = SweetAlert;
  Swal["default"] = Swal;
  return Swal;
});

if (typeof this !== 'undefined' && this.Sweetalert2) {
  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
}

"undefined" != typeof document && function (e, t) {
  var n = e.createElement("style");
  if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
    n.innerHTML = t;
  } catch (e) {
    n.innerText = t;
  }
}(document, "@charset \"UTF-8\";.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon::before{display:flex;align-items:center;font-size:2em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon::before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;zoom:normal;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;zoom:normal;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon::before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning::before{content:\"!\"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info::before{content:\"i\"}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question::before{content:\"?\"}.swal2-icon.swal2-question.swal2-arabic-question-mark::before{content:\"؟\"}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");
},{}],"utils/sweetAlertMensajes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configurarSweetAlert = void 0;

var _sweetalert = _interopRequireDefault(require("sweetalert2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
var configurarSweetAlert = function configurarSweetAlert(tipo, titulo, mensaje) {
  return _sweetalert.default.fire({
    type: tipo,
    title: titulo,
    text: mensaje
  });
};

exports.configurarSweetAlert = configurarSweetAlert;
},{"sweetalert2":"../../node_modules/sweetalert2/dist/sweetalert2.all.js"}],"views/registrarseVista.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarMensajeRegistro = exports.obtenerValoresUsuarioRegistrado = void 0;

var _base = require("../base");

var _sweetAlertMensajes = require("../utils/sweetAlertMensajes");

var _cookie = require("../utils/cookie");

/* eslint-disable */
var validarCamposLlenos = function validarCamposLlenos(infoUsuario) {
  if (infoUsuario.nombre == '' || infoUsuario.email == '' || infoUsuario.contraseña == '' || infoUsuario.confirmarContraseña == '') {
    (0, _sweetAlertMensajes.configurarSweetAlert)('error', 'Error!', 'Todos los campos son necesarios');
    return undefined;
  } else {
    return infoUsuario;
  }
};

var obtenerValoresUsuarioRegistrado = function obtenerValoresUsuarioRegistrado() {
  var infoUsuarioRegistrado = {
    nombre: _base.domElementos.registrarseUsuarioInfo.nombre.val().trim(),
    email: _base.domElementos.registrarseUsuarioInfo.email.val().trim(),
    contraseña: _base.domElementos.registrarseUsuarioInfo.contraseña.val().trim(),
    confirmarContraseña: _base.domElementos.registrarseUsuarioInfo.confirmarContraseña.val().trim()
  };
  return validarCamposLlenos(infoUsuarioRegistrado);
};

exports.obtenerValoresUsuarioRegistrado = obtenerValoresUsuarioRegistrado;

var mostrarMensajeRegistro = function mostrarMensajeRegistro(respuestaAPI) {
  if (respuestaAPI.data.status === 'Exito') {
    (0, _cookie.crearCookie)(respuestaAPI);
    (0, _sweetAlertMensajes.configurarSweetAlert)('success', 'Felicidades!', 'Te has registrado con exito').then(function (respuesta) {
      if (respuesta.value) {
        location.assign('/');
      }
    });
  } else {
    var mensajeError = crearMensajeError(respuestaAPI.data.message);
    (0, _sweetAlertMensajes.configurarSweetAlert)('error', 'Error!', mensajeError);
  }
};

exports.mostrarMensajeRegistro = mostrarMensajeRegistro;

var crearMensajeError = function crearMensajeError(error) {
  var errorGenerado = error.split(':')[2].trim();
  var mensajeError;
  if (errorGenerado === 'Las contraseñas no son iguales') mensajeError = 'Las contraseñas no son iguales';
  if (error.startsWith('E11000')) mensajeError = 'El correo electrónico debe de ser único';
  if (errorGenerado === 'Ingresa un correo electrónico valido') mensajeError = 'Ingresa un correo electrónico valido';
  if (errorGenerado === 'Ingresa un correo electrónico valido, confirmarContraseña') mensajeError = 'Ingresa un correo electrónico valido - Las contraseñas no son iguales';
  return mensajeError;
};
},{"../base":"base.js","../utils/sweetAlertMensajes":"utils/sweetAlertMensajes.js","../utils/cookie":"utils/cookie.js"}],"views/iniciarSesionVista.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarSweetAlert = exports.obtenerValoresIniciarSesion = void 0;

var _base = require("../base");

var _sweetAlertMensajes = require("../utils/sweetAlertMensajes");

var _cookie = require("../utils/cookie");

/* eslint-disable */
// Obtiene los valores de los inputs del formulario de iniciar sesión
var obtenerValoresIniciarSesion = function obtenerValoresIniciarSesion() {
  var infoUsuarioIniciarSesion = {
    email: _base.domElementos.iniciarSesionInfo.email.val().trim(),
    password: _base.domElementos.iniciarSesionInfo.password.val().trim()
  };

  if (infoUsuarioIniciarSesion.email == '' || infoUsuarioIniciarSesion.password == '') {
    (0, _sweetAlertMensajes.configurarSweetAlert)('error', 'Error!', 'Todos los campos son necesarios');
    return undefined;
  } else {
    return infoUsuarioIniciarSesion;
  }
}; // Muestra un sweet alert dependiendo de la respuesta del servidor


exports.obtenerValoresIniciarSesion = obtenerValoresIniciarSesion;

var mostrarSweetAlert = function mostrarSweetAlert(respuesta) {
  if (respuesta.data.status === 'fail') {
    (0, _sweetAlertMensajes.configurarSweetAlert)('error', 'Error!', respuesta.data.message);
  } else {
    (0, _sweetAlertMensajes.configurarSweetAlert)('success', 'Exito!', "Bienvenido ".concat(respuesta.data.data.usuario.nombre)).then(function (respuesta) {
      if (respuesta.value) {
        location.assign('/');
      }
    });
  }
};

exports.mostrarSweetAlert = mostrarSweetAlert;
},{"../base":"base.js","../utils/sweetAlertMensajes":"utils/sweetAlertMensajes.js","../utils/cookie":"utils/cookie.js"}],"views/carritoVista.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarMensajeNoSession = exports.mostrarMensajeSinStock = exports.mostrarMensajeNoProducto = exports.mostrarMensaje = exports.eliminarProductoDOM = exports.obtenerInfoProductoAEliminar = exports.obtenerInfoProductoIcono = exports.obtenerInfoProducto = void 0;

var _base = require("../base");

var _sweetAlertMensajes = require("../utils/sweetAlertMensajes");

/* eslint-disable */
// Obtiene la información del producto que se quiere agregar al carrito de compras
var obtenerInfoProducto = function obtenerInfoProducto() {
  var producto = _base.domElementos.producto;
  producto.articulo = producto.articulo.split('$')[0].trim();
  producto.cantidad = parseInt($('.producto__cantidad').val());
  producto.precio = parseInt(producto.precio);
  producto.stock = parseInt(producto.stock);
  producto.imagen = producto.imagen.split('/')[producto.imagen.split('/').length - 1];

  if (!producto.cantidad) {
    return false;
  } else {
    return producto;
  }
}; // Obtiene la información del producto que se quiere agregar al carrito de compras desde el icono del corazón


exports.obtenerInfoProducto = obtenerInfoProducto;

var obtenerInfoProductoIcono = function obtenerInfoProductoIcono(e) {
  var productoInfo = {
    articulo: e.target.parentElement.children[0].innerText,
    cantidad: '1',
    categoria: e.target.parentElement.children[6].name,
    descripcion: e.target.parentElement.children[3].name,
    imagen: e.target.parentElement.parentElement.children[0].children[0].src.split('/')[5],
    precio: parseInt(e.target.parentElement.children[1].innerText.split('$')[1]),
    slug: e.target.parentElement.children[4].name,
    stock: parseInt(e.target.parentElement.children[5].name)
  };
  return productoInfo;
}; // Obtiene la información del producto que se quiere eliminar del carrito


exports.obtenerInfoProductoIcono = obtenerInfoProductoIcono;

var obtenerInfoProductoAEliminar = function obtenerInfoProductoAEliminar(e) {
  var productoEliminar = {
    id: e.target.getAttribute('data-id'),
    cantidad: parseInt(e.target.parentElement.parentElement.parentElement.children[2].innerText),
    nombre: e.target.parentElement.parentElement.parentElement.children[0].innerText
  };
  return productoEliminar;
}; // Actualiza el número de productos del carrito


exports.obtenerInfoProductoAEliminar = obtenerInfoProductoAEliminar;

var actualizaNumeroProductos = function actualizaNumeroProductos(valor) {
  var numeroProductos = parseInt($('.nav__btnCarrito span').text());
  var operacion = valor === 'resta' ? numeroProductos - 1 : numeroProductos + 1;
  $('.nav__btnCarrito span').text(operacion);
}; // Actualiza el total del carrito


var actualizarTotalCarrito = function actualizarTotalCarrito(producto) {
  // Actualiza el número de productos del carrito
  actualizaNumeroProductos('resta');
  var precioProducto = parseInt(producto.children[3].children[0].innerText.split('$')[1].trim());
  var precioCarritoTotal = parseInt($('.carrito__resumenFila span').text().split('$')[1]);
  var precioActualizadoCarrito = precioCarritoTotal - precioProducto;
  if (precioActualizadoCarrito < 0) precioActualizadoCarrito = 0;
  $('.carrito__resumenFila span').text("$".concat(precioActualizadoCarrito));
}; // Elimina el producto del DOM


var eliminarProductoDOM = function eliminarProductoDOM(event) {
  var producto = event.target.parentElement.parentElement.parentElement;
  var listaProductos = event.target.parentElement.parentElement.parentElement.parentElement;
  listaProductos.removeChild(producto); // Actualiza el total del carrito

  actualizarTotalCarrito(producto);
}; // Envía mensajes de sweet alert


exports.eliminarProductoDOM = eliminarProductoDOM;

var mostrarMensaje = function mostrarMensaje(infoProducto) {
  (0, _sweetAlertMensajes.configurarSweetAlert)('success', 'Exito!', "Has agregado el producto ".concat(infoProducto.articulo, " a tu carrito")).then(function (respuesta) {
    if (respuesta.value) {
      // Actualiza el número de productos del carrito
      actualizaNumeroProductos('suma');
      window.location.href = '/carrito';
    }
  });
}; // Mostrar mensaje de que no se pudo eliminar el producto seleccionado


exports.mostrarMensaje = mostrarMensaje;

var mostrarMensajeNoProducto = function mostrarMensajeNoProducto() {
  (0, _sweetAlertMensajes.configurarSweetAlert)('error', 'Error!', 'No se encontró ese producto');
}; // Mostrar mensaje de que no se pudo eliminar el producto seleccionado


exports.mostrarMensajeNoProducto = mostrarMensajeNoProducto;

var mostrarMensajeSinStock = function mostrarMensajeSinStock() {
  (0, _sweetAlertMensajes.configurarSweetAlert)('warning', 'Sin productos suficientes!', 'No contamos con tantas unidades de este producto, intenta más tarde');
}; // Mostrar mensaje de que no puedes agregar un producto al carrito de compras sin iniciar sesión


exports.mostrarMensajeSinStock = mostrarMensajeSinStock;

var mostrarMensajeNoSession = function mostrarMensajeNoSession() {
  (0, _sweetAlertMensajes.configurarSweetAlert)('warning', 'No has iniciado sesión!', 'Debes iniciar sesión para agregar un producto a tu carrito').then(function (respuesta) {
    if (respuesta.value) {
      window.location.href = '/iniciarSesion';
    }
  });
};

exports.mostrarMensajeNoSession = mostrarMensajeNoSession;
},{"../base":"base.js","../utils/sweetAlertMensajes":"utils/sweetAlertMensajes.js"}],"views/compraVista.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarProductosMasVendidos = exports.obtenerId = void 0;

var _base = require("../base");

var _sweetAlertMensajes = require("../utils/sweetAlertMensajes");

/* eslint-disable */
var obtenerId = function obtenerId(e) {
  return e.target.getAttribute('data-id');
};

exports.obtenerId = obtenerId;

var mostrarProductosMasVendidos = function mostrarProductosMasVendidos(productos) {
  var arregloProductosMasVendidos = productos.data.data.data;
  arregloProductosMasVendidos.map(function (producto, indice) {
    var indiceProducto = indice + 1;
    $("#productoMasVendidoTitulo-".concat(indiceProducto)).text(producto.nombre);
    $("#productoMasVendidoDescripcion-".concat(indiceProducto)).text(producto.descripcion);
    $("#productoMasVendidoEnlace-".concat(indiceProducto)).attr('href', "/productos/".concat(producto.idProducto));
  });
};

exports.mostrarProductosMasVendidos = mostrarProductosMasVendidos;
},{"../base":"base.js","../utils/sweetAlertMensajes":"utils/sweetAlertMensajes.js"}],"views/reseñasVista.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarMensajeReseñaCreada = exports.mostrarErrorReseña = exports.mostrarMensajeCrearReseñaYPuntaje = exports.obtenerValoresReseña = exports.conseguirProductoId = exports.mostrarInfoUsuario = exports.mostrarReseñas = exports.retornarIdsUsuarios = void 0;

var _base = require("../base");

var _sweetAlertMensajes = require("../utils/sweetAlertMensajes");

/* eslint-disable */
var crearElementosHTML = function crearElementosHTML() {
  var itemLista = document.createElement('li');
  var icono = document.createElement('i');
  return [itemLista, icono];
};

var agregarEstilosIcono = function agregarEstilosIcono(icono) {
  icono.className = 'fas fa-star';
  icono.style.color = '#ff0000';
};

var crearEstrella = function crearEstrella(item, icono, contenedor) {
  var estrella = item.appendChild(icono);
  contenedor.appendChild(estrella);
};

var crearEstrellas = function crearEstrellas(puntuacion, puntuacionContenedor) {
  for (var j = 0; j < parseInt(puntuacion); j++) {
    var elementosHTML = crearElementosHTML();
    agregarEstilosIcono(elementosHTML[1]);
    crearEstrella(elementosHTML[0], elementosHTML[1], puntuacionContenedor);
  }
};

var crearIdsUsuarios = function crearIdsUsuarios() {
  var contenedores = _base.domElementos.contenedoresInformacionPersonalUsuarios;
  var idsUsuarios = []; // Llena el arreglo de idsUsuarios partiendo de los contenedores

  contenedores.contents().map(function (indice, nodo) {
    if (nodo.id !== undefined && nodo.id !== '') {
      idsUsuarios.push(nodo.id);
    }
  });
  return idsUsuarios;
};

var retornarIdsUsuarios = function retornarIdsUsuarios() {
  var ids = crearIdsUsuarios();
  return ids;
};

exports.retornarIdsUsuarios = retornarIdsUsuarios;

var mostrarReseñas = function mostrarReseñas() {
  var puntuacionesContenedores = $('.estrellasPuntuacion'); //Crea las estrellas de cada usuario

  for (var i = 0; i < puntuacionesContenedores.length; i++) {
    var puntuacion = puntuacionesContenedores[i].getAttribute('data-id');
    crearEstrellas(puntuacion, puntuacionesContenedores[i]);
  }
};

exports.mostrarReseñas = mostrarReseñas;

var mostrarInfoUsuario = function mostrarInfoUsuario(usuarios) {
  var contenedores = _base.domElementos.contenedoresInformacionPersonalUsuarios; // Por cada usuario agrega a su contenedor la foto y el nombre

  usuarios.map(function (usuario, indice) {
    contenedores[indice].children[0].src = "/images/usuarios/".concat(usuario.data.data.usuario.foto);
    contenedores[indice].children[1].innerText = usuario.data.data.usuario.nombre;
  });
};

exports.mostrarInfoUsuario = mostrarInfoUsuario;

var conseguirProductoId = function conseguirProductoId() {
  var productoId = _base.domElementos.producto.articuloId;
  return productoId;
};

exports.conseguirProductoId = conseguirProductoId;

var obtenerValoresReseña = function obtenerValoresReseña() {
  var reseña = {
    puntuacion: _base.domElementos.inputPuntajeReseña.val(),
    contenido: _base.domElementos.inputContenidoReseña.val().trim()
  };
  return reseña;
};

exports.obtenerValoresReseña = obtenerValoresReseña;

var mostrarMensajeCrearReseñaYPuntaje = function mostrarMensajeCrearReseñaYPuntaje() {
  (0, _sweetAlertMensajes.configurarSweetAlert)('error', 'Error', 'Debes de ingresar un puntaje y una reseña');
};

exports.mostrarMensajeCrearReseñaYPuntaje = mostrarMensajeCrearReseñaYPuntaje;

var mostrarErrorReseña = function mostrarErrorReseña(mensaje) {
  (0, _sweetAlertMensajes.configurarSweetAlert)('error', 'Error', mensaje);
};

exports.mostrarErrorReseña = mostrarErrorReseña;

var mostrarMensajeReseñaCreada = function mostrarMensajeReseñaCreada(idProducto) {
  (0, _sweetAlertMensajes.configurarSweetAlert)('success', 'Exito', 'Tu reseña ha sido creada').then(function (respuesta) {
    if (respuesta.value) {
      location.assign("/productos/".concat(idProducto));
    }
  });
};

exports.mostrarMensajeReseñaCreada = mostrarMensajeReseñaCreada;
},{"../base":"base.js","../utils/sweetAlertMensajes":"utils/sweetAlertMensajes.js"}],"views/perfilVista.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetearContraseñaMensaje = exports.recuperarInfoResetearContraseña = exports.mostrarMensajeRespuesta = exports.obtenerEmailRecuperarContraseña = exports.mostrarMensajeErrorCambiarContraseña = exports.mostrarMensajeContraseñaCambiadaExitosamente = exports.obtenerInputsContraseñas = exports.mostrarMensajeResenia = exports.renderizarDetallesCompra = exports.obtenerIdCompra = exports.eliminarReseniaDom = exports.obtenerIdsResenia = exports.obtenerInfoResenia = exports.obtenerInfoReseniaEditar = exports.renderizarReseñaParaEditar = exports.renderizarReseña = exports.renderizarCompra = exports.obtenerInfoAjustes = exports.mostrarError = exports.mostrarMensajeErrorCampos = exports.mostrarMensajeExito = exports.obtenerIdUsuario = void 0;

var _base = require("../base");

var _sweetAlertMensajes = require("../utils/sweetAlertMensajes");

/* eslint-disable */
var obtenerIdUsuario = function obtenerIdUsuario() {
  var id = _base.domElementos.idUsuario.attr('data-id');

  return id;
};

exports.obtenerIdUsuario = obtenerIdUsuario;

var mostrarMensajeExito = function mostrarMensajeExito() {
  (0, _sweetAlertMensajes.configurarSweetAlert)('success', 'Exito!', 'Tus datos han sido actualizados correctamente').then(function (respuesta) {
    if (respuesta.value) {
      location.assign('/perfil');
    }
  });
};

exports.mostrarMensajeExito = mostrarMensajeExito;

var mostrarMensajeErrorCampos = function mostrarMensajeErrorCampos() {
  (0, _sweetAlertMensajes.configurarSweetAlert)('error', 'Error!', 'Ambos campos son incorrectos');
};

exports.mostrarMensajeErrorCampos = mostrarMensajeErrorCampos;

var mostrarMensajeErrorNombrePequeño = function mostrarMensajeErrorNombrePequeño() {
  (0, _sweetAlertMensajes.configurarSweetAlert)('warning', 'Cuidado!', 'El nombre debe de tener al menos 3 caracteres');
};

var mostrarMensajeErrorNombreLargo = function mostrarMensajeErrorNombreLargo() {
  (0, _sweetAlertMensajes.configurarSweetAlert)('warning', 'Cuidado!', 'El nombre debe de tener como máximo 10 caracteres');
};

var mostrarMensajeErrorCorreo = function mostrarMensajeErrorCorreo() {
  (0, _sweetAlertMensajes.configurarSweetAlert)('error', 'Error!', 'Ingresa un correo válido');
};

var mostrarError = function mostrarError() {
  (0, _sweetAlertMensajes.configurarSweetAlert)('error', 'Error!', 'El formato de la imagen no es correcto');
};

exports.mostrarError = mostrarError;

var obtenerInfoAjustes = function obtenerInfoAjustes() {
  var form = new FormData();
  form.append('nombre', document.getElementById('nombreAjustes').value);
  form.append('email', document.getElementById('correoAjustes').value);
  form.append('foto', document.getElementById('fotoAjustes').files[0]);

  if (form) {
    return form;
  } else {
    return false;
  }
};

exports.obtenerInfoAjustes = obtenerInfoAjustes;

var formatoFecha = function formatoFecha(fecha) {
  return fecha.split('T')[0];
};

var renderizarCompra = function renderizarCompra(compra) {
  var markup = "\n        <div class=\"misComprasContenido\">\n            <div class=\"misCompras__fecha\">\n                <h3 class=\"textoTablaPerfil\">".concat(formatoFecha(compra.fecha), "</h3>\n            </div>\n            <div class=\"misCompras__productos\">\n                <h3 class=\"textoTablaPerfil\">").concat(compra.productos.length, " Productos comprados</h3>\n            </div>\n            <div class=\"misCompras__precio\">\n                <h3 class=\"textoTablaPerfil\">$").concat(compra.precio, "</h3>\n            </div>\n            <div class=\"misCompras__verDetalles\">\n                <a href=\"#popup-perfil\" class=\"btn btn--secundario btn--secundarioPeque\xF1o\" data-id=\"").concat(compra._id, "\">Ver Detalles</a>\n            </div>\n        </div>\n    ");

  _base.domElementos.misComprasContenedor.append(markup);
};

exports.renderizarCompra = renderizarCompra;

var renderizarReseña = function renderizarReseña(reseña) {
  var markup = "\n    <div class=\"misRese\xF1asContenido\">\n        <div class=\"misRese\xF1as__fecha\">\n            <h3 class=\"textoTablaPerfil\">".concat(formatoFecha(reseña.reseñaFecha), "</h3>\n        </div>\n        <div class=\"misRese\xF1as__productos\">\n            <h3 class=\"textoTablaPerfil\">").concat(reseña.producto, "</h3>\n        </div>\n        <div class=\"misRese\xF1as__precio\">\n            <h3 class=\"textoTablaPerfil\">").concat(reseña.reseña, "</h3>\n        </div>\n        <div class=\"misRese\xF1as__acciones\">\n            <a href=\"#popupRese\xF1a\"><i class=\"fas fa-edit icono-editar\" data-id=\"").concat(reseña.id, "\"></i></a>\n            <i class=\"fas fa-trash-alt icono-eliminar\" id=\"btnEliminarRese\xF1a\" data-id=\"").concat(reseña.id, "\"\n    </div>\n  ");

  _base.domElementos.misReseñasContenedor.append(markup);
};

exports.renderizarReseña = renderizarReseña;

var renderizarReseñaParaEditar = function renderizarReseñaParaEditar(reseña) {
  _base.domElementos.btnEditarReseña.attr('data-id', reseña.reseña.producto);

  _base.domElementos.inputIdResenia.val(reseña.reseña._id);

  _base.domElementos.inputReseñaPuntuacion.val(reseña.reseña.puntuacion);

  _base.domElementos.inputReseñaContenido.val(reseña.reseña.reseña);

  _base.domElementos.btnEditarReseña;
};

exports.renderizarReseñaParaEditar = renderizarReseñaParaEditar;

var obtenerInfoReseniaEditar = function obtenerInfoReseniaEditar(reseña) {
  return {
    puntaje: _base.domElementos.inputReseñaPuntuacion.val(),
    contenido: _base.domElementos.inputReseñaContenido.val(),
    resenia: _base.domElementos.inputIdResenia.val(),
    producto: _base.domElementos.btnEditarReseña.attr('data-id')
  };
};

exports.obtenerInfoReseniaEditar = obtenerInfoReseniaEditar;

var obtenerInfoResenia = function obtenerInfoResenia(evento) {
  var infoResenia = {
    idProducto: evento.parentElement.parentElement.children[1].innerText,
    idResenia: evento.getAttribute('data-id')
  };
  return infoResenia;
};

exports.obtenerInfoResenia = obtenerInfoResenia;

var obtenerIdsResenia = function obtenerIdsResenia(evento) {
  var info = {
    idProducto: evento.target.parentElement.parentElement.parentElement.children[1].children[0].innerText,
    idResenia: evento.target.getAttribute('data-id')
  };
  return info;
};

exports.obtenerIdsResenia = obtenerIdsResenia;

var eliminarReseniaDom = function eliminarReseniaDom(evento) {
  var elementoHijo = evento.parentElement.parentElement;
  elementoHijo.remove();
};

exports.eliminarReseniaDom = eliminarReseniaDom;

var obtenerIdCompra = function obtenerIdCompra(e) {
  return e.target.getAttribute('data-id');
};

exports.obtenerIdCompra = obtenerIdCompra;

var renderizarDetallesCompra = function renderizarDetallesCompra(producto) {
  var markup = "\n    <div class=\"misComprasContenido\">\n      <div class=\"misCompras__fecha\">\n          <h3 class=\"textoTablaPerfil\">".concat(producto.categoria, "</h3>\n      </div>\n      <div class=\"misCompras__productos\">\n          <h3 class=\"textoTablaPerfil\">").concat(producto.articulo, "</h3>\n      </div>\n      <div class=\"misCompras__precio\">\n          <h3 class=\"textoTablaPerfil\">").concat(producto.cantidad, "</h3>\n      </div>\n      <div class=\"misCompras__verDetalles\">\n          <h3 class=\"textoTablaPerfil\">$").concat(producto.precio, "</h3>\n      </div>\n    </div>");

  _base.domElementos.contenedorCompraUnica.append(markup);
};

exports.renderizarDetallesCompra = renderizarDetallesCompra;

var mostrarMensajeResenia = function mostrarMensajeResenia(respuesta) {
  if (respuesta.data.status === 'Exito') {
    (0, _sweetAlertMensajes.configurarSweetAlert)('success', 'Exito!', 'Has editado tu reseña');
  } else {
    (0, _sweetAlertMensajes.configurarSweetAlert)('fail', 'Error!', 'Parece que ha ocurrido un error');
  }
};

exports.mostrarMensajeResenia = mostrarMensajeResenia;

var obtenerInputsContraseñas = function obtenerInputsContraseñas() {
  var infoActualizarContraseña = {
    contraseñaActual: _base.domElementos.contraseñaActualInput.val(),
    contraseñaNueva: _base.domElementos.nuevaContraseñaInput.val(),
    confirmarContraseña: _base.domElementos.confirmarContraseñaInput.val()
  };
  return infoActualizarContraseña;
};

exports.obtenerInputsContraseñas = obtenerInputsContraseñas;

var mostrarMensajeContraseñaCambiadaExitosamente = function mostrarMensajeContraseñaCambiadaExitosamente() {
  (0, _sweetAlertMensajes.configurarSweetAlert)('success', 'Exito', 'La contraseña se actualizó correctamente');
};

exports.mostrarMensajeContraseñaCambiadaExitosamente = mostrarMensajeContraseñaCambiadaExitosamente;

var mostrarMensajeErrorCambiarContraseña = function mostrarMensajeErrorCambiarContraseña(mensaje) {
  (0, _sweetAlertMensajes.configurarSweetAlert)('error', 'Error!', mensaje);
};

exports.mostrarMensajeErrorCambiarContraseña = mostrarMensajeErrorCambiarContraseña;

var obtenerEmailRecuperarContraseña = function obtenerEmailRecuperarContraseña() {
  return _base.domElementos.inputEmailRecuperarContrasenia.val();
};

exports.obtenerEmailRecuperarContraseña = obtenerEmailRecuperarContraseña;

var mostrarMensajeRespuesta = function mostrarMensajeRespuesta(respuesta) {
  if (respuesta.data.status === 'success') {
    (0, _sweetAlertMensajes.configurarSweetAlert)('success', 'Exito', 'Te ha sido envíado un correo con las instrucciones para que recuperes tu contraseña.').then(function (respuesta) {
      if (respuesta.value) {
        location.assign('/iniciarSesion');
      }
    });
  } else {
    (0, _sweetAlertMensajes.configurarSweetAlert)('error', 'Error!', 'No existe ese ese correo electrónico en nuestra base de datos.');
  }
};

exports.mostrarMensajeRespuesta = mostrarMensajeRespuesta;

var recuperarInfoResetearContraseña = function recuperarInfoResetearContraseña() {
  return {
    contraseña: _base.domElementos.inputContraseñaResetear.val().trim(),
    confirmarContraseña: _base.domElementos.inputConfirmarContraseñaResetear.val().trim()
  };
};

exports.recuperarInfoResetearContraseña = recuperarInfoResetearContraseña;

var resetearContraseñaMensaje = function resetearContraseñaMensaje(mensaje) {
  if (mensaje.data.status === 'Exito') {
    (0, _sweetAlertMensajes.configurarSweetAlert)('success', 'Exito!', 'La contraseña ha sido actualizada').then(function (respuesta) {
      if (respuesta.value) {
        location.assign('/');
      }
    });
  } else {
    (0, _sweetAlertMensajes.configurarSweetAlert)('error', 'Error!', 'Las contraseñas no son iguales');
  }
};

exports.resetearContraseñaMensaje = resetearContraseñaMensaje;
},{"../base":"base.js","../utils/sweetAlertMensajes":"utils/sweetAlertMensajes.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _base = require("./base");

var _cerrarSesion = require("./models/cerrarSesion");

var _cookie = require("./utils/cookie");

var _peticiones = _interopRequireDefault(require("./models/peticiones"));

var _registrarse = _interopRequireDefault(require("./models/registrarse"));

var _iniciarSesion = _interopRequireDefault(require("./models/iniciarSesion"));

var _carrito = _interopRequireDefault(require("./models/carrito"));

var _compra = _interopRequireDefault(require("./models/compra"));

var _reseA = _interopRequireDefault(require("./models/rese\xF1a"));

var _perfil = _interopRequireDefault(require("./models/perfil"));

var registrarseVista = _interopRequireWildcard(require("./views/registrarseVista"));

var iniciarSesionVista = _interopRequireWildcard(require("./views/iniciarSesionVista"));

var carritoVista = _interopRequireWildcard(require("./views/carritoVista"));

var compraVista = _interopRequireWildcard(require("./views/compraVista"));

var reseñaVista = _interopRequireWildcard(require("./views/rese\xF1asVista"));

var perfilVista = _interopRequireWildcard(require("./views/perfilVista"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(document).ready(function () {
  // Configura los puntos en los que se tienen que hacer animaciones
  (0, _base.configWaypoints)();
  history.pushState(null, null, location.href);

  window.onpopstate = function () {
    history.go(1);
  };

  var controladorMostrarReseñas =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var ids, peticion, usuarios;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              reseñaVista.mostrarReseñas();
              ids = reseñaVista.retornarIdsUsuarios();
              peticion = new _peticiones.default();
              _context.next = 5;
              return peticion.obtenerUsuarios(ids);

            case 5:
              usuarios = _context.sent;
              reseñaVista.mostrarInfoUsuario(usuarios);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function controladorMostrarReseñas() {
      return _ref.apply(this, arguments);
    };
  }();

  controladorMostrarReseñas();

  var controladorMostrarMejoresProductos =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var productosMasComprados;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return new _compra.default().mostrarProductosConMasCompras();

            case 2:
              productosMasComprados = _context2.sent;
              compraVista.mostrarProductosMasVendidos(productosMasComprados);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function controladorMostrarMejoresProductos() {
      return _ref2.apply(this, arguments);
    };
  }();

  controladorMostrarMejoresProductos();

  var controladorCrearResenia =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var productoId, valoresReseña, infoReseña, reseña, mensaje;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              productoId = reseñaVista.conseguirProductoId();
              valoresReseña = reseñaVista.obtenerValoresReseña();

              if (!(valoresReseña.puntuacion === '' || valoresReseña.contenido === '')) {
                _context3.next = 6;
                break;
              }

              reseñaVista.mostrarMensajeCrearReseñaYPuntaje();
              _context3.next = 12;
              break;

            case 6:
              infoReseña = {
                id: productoId,
                puntuacion: valoresReseña.puntuacion,
                reseña: valoresReseña.contenido
              };
              reseña = new _reseA.default(infoReseña);
              _context3.next = 10;
              return reseña.crear();

            case 10:
              mensaje = _context3.sent;

              if (mensaje === 'Debes de comprar el producto antes de hacer la reseña' || mensaje === 'No puedes escribir más de una reseña') {
                reseñaVista.mostrarErrorReseña(mensaje);
              } else {
                reseñaVista.mostrarMensajeReseñaCreada(productoId);
              }

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function controladorCrearResenia() {
      return _ref3.apply(this, arguments);
    };
  }();

  var controladorEliminarResenia = function controladorEliminarResenia(target) {
    var perfil = new _perfil.default();
    var infoResenia = perfilVista.obtenerInfoResenia(target);
    perfilVista.eliminarReseniaDom(target);
    perfil.eliminarResenia(infoResenia.idProducto, infoResenia.idResenia);
  };

  var controladorMiInformacion =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      var idUsuario, perfil, compras, reseñas;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              idUsuario = perfilVista.obtenerIdUsuario();
              perfil = new _perfil.default();
              _context4.next = 4;
              return perfil.mostrarMisCompras(idUsuario);

            case 4:
              compras = _context4.sent;
              _context4.next = 7;
              return perfil.mostrarMisReseñas(idUsuario);

            case 7:
              reseñas = _context4.sent;
              reseñas.map(function (reseña) {
                perfilVista.renderizarReseña(reseña);
              });
              compras.map(function (compra) {
                perfilVista.renderizarCompra(compra);
              });

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function controladorMiInformacion() {
      return _ref4.apply(this, arguments);
    };
  }();

  var URL = document.URL.split('/');

  if (document.URL.split('/')[URL.length - 1] === 'perfil' || document.URL.split('/')[URL.length - 1] === 'misCompras' || document.URL.split('/')[URL.length - 1] === 'misResenias') {
    controladorMiInformacion();
  }

  var controladorRegistrarse =
  /*#__PURE__*/
  function () {
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5() {
      var infoUsuario, objetoUsuario, usuarioRegistrado;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // Se crea la infoUsuario con los valores ingresados
              infoUsuario = registrarseVista.obtenerValoresUsuarioRegistrado();

              if (!(infoUsuario !== undefined)) {
                _context5.next = 7;
                break;
              }

              // Se crea un objeto de la clase Registrarse con la información del usuario
              objetoUsuario = new _registrarse.default(infoUsuario); // Se envía la petición al servidor para crear el usuario

              _context5.next = 5;
              return objetoUsuario.enviarPeticion();

            case 5:
              usuarioRegistrado = _context5.sent;
              // Muestra el sweet alert según la respuesta de la petición
              registrarseVista.mostrarMensajeRegistro(usuarioRegistrado);

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function controladorRegistrarse() {
      return _ref5.apply(this, arguments);
    };
  }();

  var controladorIniciarSesion =
  /*#__PURE__*/
  function () {
    var _ref6 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee6() {
      var infoUsuario, objetoUsuario, usuarioLogeado;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              // Se crea infoUsuario con la información del usuario que quiere iniciar sesión
              infoUsuario = iniciarSesionVista.obtenerValoresIniciarSesion();

              if (!(infoUsuario !== undefined)) {
                _context6.next = 8;
                break;
              }

              // Se crea un objeto de la clase IniciarSesion con la información del usuario
              objetoUsuario = new _iniciarSesion.default(infoUsuario); // Se envía una petición al servidor para confirmar que el usuario existe

              objetoUsuario.enviarPeticion();
              _context6.next = 6;
              return objetoUsuario.enviarPeticion();

            case 6:
              usuarioLogeado = _context6.sent;
              iniciarSesionVista.mostrarSweetAlert(usuarioLogeado);

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function controladorIniciarSesion() {
      return _ref6.apply(this, arguments);
    };
  }(); //Controlador que agrega un producto al carrito


  var controladorCarrito =
  /*#__PURE__*/
  function () {
    var _ref7 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee7(boton, e) {
      var infoProducto, producto, respuesta;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (boton === 'btn') {
                // Obtener los datos del producto que quiero agregar al carrito
                infoProducto = carritoVista.obtenerInfoProducto();
              } else if (boton === 'icono') {
                infoProducto = carritoVista.obtenerInfoProductoIcono(e);
              } // Si la cantidad de productos que quiere comprar el usuario es más grande que el stock, se muestra el mensaje que no hay suficiente stock


              if (!(infoProducto.cantidad > infoProducto.stock)) {
                _context7.next = 5;
                break;
              }

              carritoVista.mostrarMensajeSinStock();
              _context7.next = 16;
              break;

            case 5:
              // Crear un objeto de la clase Carrito
              producto = new _carrito.default();

              if (!(infoProducto !== false)) {
                _context7.next = 15;
                break;
              }

              _context7.next = 9;
              return producto.agregarProducto(infoProducto);

            case 9:
              respuesta = _context7.sent;

              if (!(respuesta.data.status !== 'Exito')) {
                _context7.next = 12;
                break;
              }

              return _context7.abrupt("return", carritoVista.mostrarMensajeNoSession());

            case 12:
              carritoVista.mostrarMensaje(infoProducto);
              _context7.next = 16;
              break;

            case 15:
              carritoVista.mostrarMensaje(infoProducto);

            case 16:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function controladorCarrito(_x, _x2) {
      return _ref7.apply(this, arguments);
    };
  }(); // Controlador que elimina un producto del carrito


  var controladorEliminarProductoCarrito =
  /*#__PURE__*/
  function () {
    var _ref8 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee8(e) {
      var productoEliminar, producto, permisoBorrarProducto;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              // Se obtiene el id del producto que se quiere eliminar
              productoEliminar = carritoVista.obtenerInfoProductoAEliminar(e); // Se crea un objeto de la clase Carrito

              producto = new _carrito.default(); // Se elimina el producto creado con el id del producto y se envía la cantidad para que se actualice el stock

              _context8.next = 4;
              return producto.eliminarProducto(productoEliminar.id, productoEliminar.cantidad, productoEliminar.nombre);

            case 4:
              permisoBorrarProducto = _context8.sent;

              if (permisoBorrarProducto) {
                carritoVista.eliminarProductoDOM(e);
              } else {
                carritoVista.mostrarMensajeNoProducto();
              }

            case 6:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function controladorEliminarProductoCarrito(_x3) {
      return _ref8.apply(this, arguments);
    };
  }();

  var controladorGuardarAjustes =
  /*#__PURE__*/
  function () {
    var _ref9 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee9() {
      var respuesta, infoUsuario, perfil;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              infoUsuario = perfilVista.obtenerInfoAjustes();

              if (!infoUsuario) {
                _context9.next = 7;
                break;
              }

              perfil = new _perfil.default();
              _context9.next = 5;
              return perfil.editar(infoUsuario, 'infoNormal');

            case 5:
              respuesta = _context9.sent;
              respuesta.data.status === 'error' ? perfilVista.mostrarError() : perfilVista.mostrarMensajeExito();

            case 7:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function controladorGuardarAjustes() {
      return _ref9.apply(this, arguments);
    };
  }();

  var controladorVerDetallesCompra =
  /*#__PURE__*/
  function () {
    var _ref10 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee10(e) {
      var idCompra, perfil, compra;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              idCompra = perfilVista.obtenerIdCompra(e);
              perfil = new _perfil.default();
              _context10.next = 4;
              return perfil.obtenerCompra(idCompra);

            case 4:
              compra = _context10.sent;
              compra.productos.map(function (producto) {
                perfilVista.renderizarDetallesCompra(producto);
              });

            case 6:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function controladorVerDetallesCompra(_x4) {
      return _ref10.apply(this, arguments);
    };
  }();

  var controladorMostrarReseñaParaEditar =
  /*#__PURE__*/
  function () {
    var _ref11 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee11(e) {
      var info, perfil, respuesta;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              info = perfilVista.obtenerIdsResenia(e);
              perfil = new _perfil.default();
              _context11.next = 4;
              return perfil.obtenerResenia(info.idProducto, info.idResenia);

            case 4:
              respuesta = _context11.sent;
              perfilVista.renderizarReseñaParaEditar(respuesta);
              return _context11.abrupt("return", info);

            case 7:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function controladorMostrarReseñaParaEditar(_x5) {
      return _ref11.apply(this, arguments);
    };
  }();

  var controladorEditarReseña =
  /*#__PURE__*/
  function () {
    var _ref12 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee12(e) {
      var infoResenia, perfil, respuesta;
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              infoResenia = perfilVista.obtenerInfoReseniaEditar();
              perfil = new _perfil.default();
              _context12.next = 4;
              return perfil.editarReseña(infoResenia.producto, infoResenia.resenia, {
                reseña: infoResenia.contenido,
                puntuacion: infoResenia.puntaje
              });

            case 4:
              respuesta = _context12.sent;
              perfilVista.mostrarMensajeResenia(respuesta);

            case 6:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function controladorEditarReseña(_x6) {
      return _ref12.apply(this, arguments);
    };
  }();

  var controladorCambiarContraseña =
  /*#__PURE__*/
  function () {
    var _ref13 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee13() {
      var infoContraseña, usuario, respuesta, mensaje;
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              infoContraseña = perfilVista.obtenerInputsContraseñas();
              usuario = new _perfil.default();
              _context13.next = 4;
              return usuario.editar(infoContraseña, 'contraseña');

            case 4:
              respuesta = _context13.sent;

              if (respuesta.data.status === 'Exito') {
                perfilVista.mostrarMensajeContraseñaCambiadaExitosamente();
              } else {
                mensaje = respuesta.data.message.split(':')[respuesta.data.message.split(':').length - 1];
                perfilVista.mostrarMensajeErrorCambiarContraseña(mensaje);
              }

            case 6:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function controladorCambiarContraseña() {
      return _ref13.apply(this, arguments);
    };
  }();

  var controladorRecuperarContraseña =
  /*#__PURE__*/
  function () {
    var _ref14 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee14() {
      var email, perfil, respuesta;
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              // Recuperar el valor del email al que se le quiere envíar la contraseña
              email = perfilVista.obtenerEmailRecuperarContraseña();
              perfil = new _perfil.default();
              _context14.next = 4;
              return perfil.recuperarContrasenia({
                email: email
              });

            case 4:
              respuesta = _context14.sent;
              perfilVista.mostrarMensajeRespuesta(respuesta);

            case 6:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    return function controladorRecuperarContraseña() {
      return _ref14.apply(this, arguments);
    };
  }();

  var controladorResetearContraseña =
  /*#__PURE__*/
  function () {
    var _ref15 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee15() {
      var infoResetearContraseña, token, perfil, respuesta;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              infoResetearContraseña = perfilVista.recuperarInfoResetearContraseña();
              token = window.location.href.split('/')[window.location.href.split('/').length - 1];

              if (!token) {
                _context15.next = 8;
                break;
              }

              perfil = new _perfil.default();
              _context15.next = 6;
              return perfil.resetearContrasenia(infoResetearContraseña, token);

            case 6:
              respuesta = _context15.sent;
              perfilVista.resetearContraseñaMensaje(respuesta);

            case 8:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));

    return function controladorResetearContraseña() {
      return _ref15.apply(this, arguments);
    };
  }(); // Evento que se dispara cuando se envía el formulario de Registro


  _base.domElementos.formularioRegistrarse.submit(function (event) {
    event.preventDefault();
    controladorRegistrarse();
  }); // Evento que se dispara cuando se envía el formulario de iniciar sesión


  _base.domElementos.formularioIniciarSesion.submit(function (event) {
    event.preventDefault();
    controladorIniciarSesion();
  }); // Evento que se dispara cuando se presiona el boton de agregar al carrito


  _base.domElementos.btnAgregarCarrito.on('click', function (e) {
    e.preventDefault();
    controladorCarrito('btn');
  }); // Evento que se dispara cuando se presiona el icono de agregar al carrito


  _base.domElementos.iconoAgregarCarrito.on('click', function (e) {
    controladorCarrito('icono', e);
  }); // Evento que se dispara cuando se presiona el boton de eliminar carrito


  _base.domElementos.btnEliminarCarrito.on('click',
  /*#__PURE__*/
  function () {
    var _ref16 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee16(e) {
      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              e.preventDefault();
              controladorEliminarProductoCarrito(e);

            case 2:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }));

    return function (_x7) {
      return _ref16.apply(this, arguments);
    };
  }()); // Evento que se dispara cuando se hace click en el boton de comprar


  _base.domElementos.btnComprar.on('click', function (e) {
    // Se obtiene el id del carrito que se quiere comprar
    var idCarrito = compraVista.obtenerId(e); // Crear una nueva compra

    var nuevaCompra = new _compra.default(idCarrito); // Hacer la petición al servidor

    nuevaCompra.hacerPeticionStripe();
  });

  _base.domElementos.btnPublicarReseña.on('click',
  /*#__PURE__*/
  function () {
    var _ref17 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee17(e) {
      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              e.preventDefault();
              controladorCrearResenia();

            case 2:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    }));

    return function (_x8) {
      return _ref17.apply(this, arguments);
    };
  }());

  _base.domElementos.perfilContenido.on('click', function (e) {
    if (e.target.matches('#btnEliminarReseña')) {
      controladorEliminarResenia(e.target);
    }
  });

  _base.domElementos.formularioAjustes.submit(function (event) {
    event.preventDefault();
    controladorGuardarAjustes();
  });

  _base.domElementos.perfilContenido.on('click', function (e) {
    if (e.target.matches('.btn--secundarioPequeño')) {
      controladorVerDetallesCompra(e);
    }

    if (e.target.matches('.icono-editar')) {
      controladorMostrarReseñaParaEditar(e);
    }
  });

  _base.domElementos.btnEditarReseña.on('click', function (e) {
    e.preventDefault();
    controladorEditarReseña(e);
  });

  _base.domElementos.formularioContraseña.submit(
  /*#__PURE__*/
  function () {
    var _ref18 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee18(e) {
      return regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              e.preventDefault();
              controladorCambiarContraseña();

            case 2:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    }));

    return function (_x9) {
      return _ref18.apply(this, arguments);
    };
  }());

  _base.domElementos.formularioRecuperarContraseña.submit(function (e) {
    e.preventDefault();
    controladorRecuperarContraseña();
  });

  _base.domElementos.formularioResetearContraseña.submit(function (e) {
    e.preventDefault();
    controladorResetearContraseña();
  }); // Evento que se dispara cuando se cierra sesión


  _base.domElementos.btnCerrarSesion.on('click',
  /*#__PURE__*/
  function () {
    var _ref19 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee19(e) {
      return regeneratorRuntime.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              e.preventDefault();
              _context19.next = 3;
              return (0, _cerrarSesion.cerrarSesion)();

            case 3:
              location.assign('/');

            case 4:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }));

    return function (_x10) {
      return _ref19.apply(this, arguments);
    };
  }());
});
},{"./base":"base.js","./models/cerrarSesion":"models/cerrarSesion.js","./utils/cookie":"utils/cookie.js","./models/peticiones":"models/peticiones.js","./models/registrarse":"models/registrarse.js","./models/iniciarSesion":"models/iniciarSesion.js","./models/carrito":"models/carrito.js","./models/compra":"models/compra.js","./models/reseña":"models/reseña.js","./models/perfil":"models/perfil.js","./views/registrarseVista":"views/registrarseVista.js","./views/iniciarSesionVista":"views/iniciarSesionVista.js","./views/carritoVista":"views/carritoVista.js","./views/compraVista":"views/compraVista.js","./views/reseñasVista":"views/reseñasVista.js","./views/perfilVista":"views/perfilVista.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56509" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/bundle.js.map