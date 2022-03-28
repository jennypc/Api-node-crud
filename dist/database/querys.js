"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getAllProduct: 'SELECT * FROM PadronPrueba',
  addNewProduct: 'INSERT INTO PadronPrueba(manzana, lote, usuario,nombre, domicilio, colonia, tarifa,estado, fecha_descuento, importe_descuento, saldo,fecha_ultimo_pago)VALUES (@manzana, @lote, @usuario, @nombre, @domicilio, @colonia, tarifa,estado, @fecha_descuento, @importe_descuento, @saldo,@fecha_ultimo_pago)',
  getProductById: "SELECT * FROM PadronPrueba Where Id = @Id",
  deleteProductById: "DELETE FROM [padronPrueba].[dbo].[PadronPrueba] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM PadronPrueba",
  updateProductById: "UPDATE Products SET manzana = @manzana, lote = @lote, usuario = @usuario , nombre = @nombre , domicilio = @domicilio, colonia = @colonia, tarifa = @tarifa, estado = @estado, fecha_descuento = @fecha_descuento, importe_descuento = @importe_descuento, saldo = @saldo, fecha_ultimo_pago = fecha_ultimo_pago WHERE Id = @id"
};
exports.queries = queries;