import sql from 'mssql';
import config from '../../config';

const dbSettings = {
    user:"Jenn",
    password:"12345",
    server:"localhost",
    database:"padronPueba", 
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      }

};
 export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
      } catch (error) {
        console.error(error);
    }

}
export {sql};
