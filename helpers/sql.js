const { BadRequestError } = require("../expressError");

// THIS NEEDS SOME GREAT DOCUMENTATION.
/** Generates the SQL code needed for a partial update query
 * 
 * Given an object with data to update {firstName: "Updated first name", lastName: "Updated last name"} 
 * and an object that maps the JS keys to their SQL column names { firstName: "first_name", lastName: "last_name"}
 * returns an object with corresponding values for use in parameterized SQL queries 
 *  //{
 *      setCols: '"first_name"=$1, "last_name"=$2',
 *      values: ['Updated first name', 'Updated last name']
 *     }
 *   
 */

function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  const keys = Object.keys(dataToUpdate);
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );

  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
