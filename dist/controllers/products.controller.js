"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductById = exports.getTotalProducts = exports.getProducts = exports.getProductById = exports.deleteProductById = exports.createNewProducts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.queries.getAllProduct);

          case 6:
            result = _context.sent;
            res.json(result.recordsets);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProducts = getProducts;

var createNewProducts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, manzana, lote, usuario, nombre, domicilio, colonia, tarifa, estado, fecha_descuento, importe_descuento, saldo, fecha_ultimo_pago, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, manzana = _req$body.manzana, lote = _req$body.lote, usuario = _req$body.usuario, nombre = _req$body.nombre, domicilio = _req$body.domicilio, colonia = _req$body.colonia, tarifa = _req$body.tarifa, estado = _req$body.estado, fecha_descuento = _req$body.fecha_descuento, importe_descuento = _req$body.importe_descuento, saldo = _req$body.saldo, fecha_ultimo_pago = _req$body.fecha_ultimo_pago;

            if (!(manzana == null || lote == null || usuario == null || nombre == null || domicilio || null || colonia == null || tarifa == null || estado == null || fecha_descuento == null || importe_descuento == null || saldo == null || fecha_ultimo_pago == null)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: 'Bad Request. Llena los campos'
            }));

          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context2.sent;
            _context2.next = 9;
            return pool.request().input('manzana', _database.sql.VarChar, manzana).input('lote', _database.sql.VarChar, lote).input('usuario', _database.sql.VarChar, usuario).input('nombre', _database.sql.VarChar, nombre).input('domicilio', _database.sql.VarChar, domicilio).input('colonia', _database.sql.VarChar, colonia).input('tarifa', _database.sql.VarChar, tarifa).input('estado', _database.sql.VarChar, estado).input('fecha_descuento', _database.sql.DateTime, fecha_descuento).input('importe_descuento', _database.sql.VarChar, importe_descuento).input('saldo', _database.sql.VarChar, saldo).input('fecha_ultimo_pago', _database.sql.DateTime, fecha_ultimo_pago).query(_database.queries.addNewProduct);

          case 9:
            res.json({
              manzana: manzana,
              lote: lote,
              usuario: usuario,
              nombre: nombre,
              domicilio: domicilio,
              colonia: colonia,
              tarifa: tarifa,
              estado: estado,
              fecha_descuento: fecha_descuento,
              importe_descuento: importe_descuento,
              saldo: saldo,
              fecha_ultimo_pago: fecha_ultimo_pago
            });
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            res.status(500);
            res.send(_context2.t0.message);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 12]]);
  }));

  return function createNewProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createNewProducts = createNewProducts;

var getProductById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input("Id", id).query(_database.queries.getProductById);

          case 6:
            result = _context3.sent;
            res.send(result.recordset[0]);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProductById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProductById = getProductById;

var deleteProductById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input("Id", id).query(_database.queries.deleteProduct);

          case 6:
            result = _context4.sent;
            res.sendstatus(204);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteProductById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteProductById = deleteProductById;

var getTotalProducts = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.getConnection)();

          case 2:
            pool = _context5.sent;
            _context5.next = 5;
            return pool.request().query(_database.queries.getTotalProducts);

          case 5:
            result = _context5.sent;
            res.json(result.recordset[0]['']);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getTotalProducts(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getTotalProducts = getTotalProducts;

var updateProductById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body2, manzana, lote, usuario, nombre, domicilio, colonia, tarifa, estado, fecha_descuento, importe_descuento, saldo, fecha_ultimo_pago, id, pool;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, manzana = _req$body2.manzana, lote = _req$body2.lote, usuario = _req$body2.usuario, nombre = _req$body2.nombre, domicilio = _req$body2.domicilio, colonia = _req$body2.colonia, tarifa = _req$body2.tarifa, estado = _req$body2.estado, fecha_descuento = _req$body2.fecha_descuento, importe_descuento = _req$body2.importe_descuento, saldo = _req$body2.saldo, fecha_ultimo_pago = _req$body2.fecha_ultimo_pago;
            id = req.params.id;

            if (!(manzana == null || lote == null || usuario == null || nombre == null || domicilio || null || colonia == null || tarifa == null || estado == null || fecha_descuento == null || importe_descuento == null || saldo == null || fecha_ultimo_pago == null)) {
              _context6.next = 4;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              msg: 'Bad Request. Llena los campos'
            }));

          case 4:
            _context6.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context6.sent;
            _context6.next = 9;
            return pool.request().input('manzana', _database.sql.VarChar, manzana).input('lote', _database.sql.VarChar, lote).input('usuario', _database.sql.VarChar, usuario).input('nombre', _database.sql.VarChar, nombre).input('domicilio', _database.sql.VarChar, domicilio).input('colonia', _database.sql.VarChar, colonia).input('tarifa', _database.sql.VarChar, tarifa).input('estado', _database.sql.VarChar, estado).input('fecha_descuento', _database.sql.DateTime, fecha_descuento).input('importe_descuento', _database.sql.VarChar, importe_descuento).input('saldo', _database.sql.VarChar, saldo).input('fecha_ultimo_pago', _database.sql.DateTime, fecha_ultimo_pago).query(_database.queries.updateProductById);

          case 9:
            res.json({
              manzana: manzana,
              lote: lote,
              usuario: usuario,
              nombre: nombre,
              domicilio: domicilio,
              colonia: colonia,
              tarifa: tarifa,
              estado: estado,
              fecha_descuento: fecha_descuento,
              importe_descuento: importe_descuento,
              saldo: saldo,
              fecha_ultimo_pago: fecha_ultimo_pago
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateProductById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateProductById = updateProductById;