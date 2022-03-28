import { getConnection, sql, queries } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProduct);
    res.json(result.recordsets);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const createNewProducts = async (req, res) => {
  const {
    manzana,
    lote,
    usuario,
    nombre,
    domicilio,
    colonia,
    tarifa,
    estado,
    fecha_descuento,
    importe_descuento,
    saldo,
    fecha_ultimo_pago,
  } = req.body;

  if (
    manzana === null ||
    lote === null ||
    usuario === null ||
    nombre === null ||
    domicilio === null ||
    colonia === null ||
    tarifa === null ||
    estado === null ||
    fecha_descuento === null ||
    importe_descuento === null ||
    saldo === null ||
    fecha_ultimo_pago === null
  ) {
    return res.status(400).json({ msg: "Bad Request. Llena los campos" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("manzana", sql.VarChar, manzana)
      .input("lote", sql.VarChar, lote)
      .input("usuario", sql.VarChar, usuario)
      .input("nombre", sql.VarChar, nombre)
      .input("domicilio", sql.VarChar, domicilio)
      .input("colonia", sql.VarChar, colonia)
      .input("tarifa", sql.VarChar, tarifa)
      .input("estado", sql.VarChar, estado)
      .input("fecha_descuento", sql.DateTime, fecha_descuento)
      .input("importe_descuento", sql.VarChar, importe_descuento)
      .input("saldo", sql.VarChar, saldo)
      .input("fecha_ultimo_pago", sql.DateTime, fecha_ultimo_pago)
      .query(queries.addNewProduct);

    res.json({
      manzana,
      lote,
      usuario,
      nombre,
      domicilio,
      colonia,
      tarifa,
      estado,
      fecha_descuento,
      importe_descuento,
      saldo,
      fecha_ultimo_pago,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .query(queries.getProductById);
  res.send(result.recordset[0]);
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;
  console.log("Eliminando");
  console.log(id);
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .query(queries.deleteProductById);
    console.log(result);
    res.sendStatus(204);
};

export const getTotalProducts = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getTotalProducts);

  res.json(result.recordset[0][""]);
};

export const updateProductById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const {
    manzana,
    lote,
    usuario,
    nombre,
    domicilio,
    colonia,
    tarifa,
    estado,
    fecha_descuento,
    importe_descuento,
    saldo,
    fecha_ultimo_pago,
  } = req.body;
    

  if (
    manzana === null ||
    lote === null ||
    usuario === null ||
    nombre === null ||
    domicilio === null ||
    colonia === null ||
    tarifa === null ||
    estado === null ||
    fecha_descuento === null ||
    importe_descuento === null ||
    saldo === null ||
    fecha_ultimo_pago === null
  ) {
    return res.status(400).json({ msg: "Bad Request. Llena los campos" });
  }

  const pool = await getConnection();
  await pool
    .request()
    .input("id", id)
    .input("manzana", sql.VarChar, manzana)
    .input("lote", sql.VarChar, lote)
    .input("usuario", sql.VarChar, usuario)
    .input("nombre", sql.VarChar, nombre)
    .input("domicilio", sql.VarChar, domicilio)
    .input("colonia", sql.VarChar, colonia)
    .input("tarifa", sql.VarChar, tarifa)
    .input("estado", sql.VarChar, estado)
    .input("fecha_descuento", sql.DateTime, fecha_descuento)
    .input("importe_descuento", sql.VarChar, importe_descuento)
    .input("saldo", sql.VarChar, saldo)
    .input("fecha_ultimo_pago", sql.DateTime, fecha_ultimo_pago)
    .query(queries.updateProductById);

  res.json({
    manzana,
    lote,
    usuario,
    nombre,
    domicilio,
    colonia,
    tarifa,
    estado,
    fecha_descuento,
    importe_descuento,
    saldo,
    fecha_ultimo_pago,
  });
};
