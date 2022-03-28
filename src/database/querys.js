export const queries = {
  getAllProduct: "SELECT * FROM padronP2",
  addNewProduct:
    "INSERT INTO padronP2(manzana, lote, usuario, nombre, domicilio, colonia, tarifa, estado, fecha_descuento, importe_descuento, saldo,fecha_ultimo_pago)VALUES (@manzana, @lote, @usuario, @nombre, @domicilio, @colonia, @tarifa, @estado, @fecha_descuento, @importe_descuento, @saldo, @fecha_ultimo_pago)",
  getProductById: "SELECT * FROM padronP2 Where Id = @Id",
  deleteProductById:
    "DELETE FROM [padronPueba].[dbo].[padronP2] WHERE id=@Id",
  getTotalProducts: "SELECT COUNT(*) FROM padronP2",
  updateProductById:
    "UPDATE padronP2 SET  manzana = @manzana, lote = @lote, usuario = @usuario , nombre = @nombre , domicilio = @domicilio, colonia = @colonia, tarifa = @tarifa, estado = @estado, fecha_descuento = @fecha_descuento, importe_descuento = @importe_descuento, saldo = @saldo, fecha_ultimo_pago = @fecha_ultimo_pago WHERE id=@id"
};
