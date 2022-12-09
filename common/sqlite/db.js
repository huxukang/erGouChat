// 操作SQLite 数据库
const dbName = 'uniappSqlite';
const dbPath = '_doc/sql_chat.db';

function openComDB(name, path, callback) {
 
    plus.sqlite.openDatabase({
        name: name,
        path: path,
        success: function(e) {
            // plus.nativeUI.alert('打开数据库成功'); 
            callback(e)
        },
        fail: function(e) {
            // plus.nativeUI.alert("打开数据库失败"); 
            callback(e);
        }
    })
}
 
function executeSQL(name, sql, callback) {
 
    plus.sqlite.selectSql({
        name: name,
        sql: sql,
        success: function(e) {
            // console.log("查询数据库:" + name + ",表:" + sql + ";的"); 
            console.log("查询数据库:"+JSON.stringify(e)); 
            callback(e);
        },
        fail: function(e) {
            console.log("查询数据库失败:" + JSON.stringify(e));
            callback(e);
        }
    })
}
 
function closeComDB(name, path, callback) {
 
    plus.sqlite.closeDatabase({
        name: name,
        path: path,
        success: function(e) {
            // plus.nativeUI.alert('打开数据库成功'); 
            callback(e)
        },
        fail: function(e) {
            // plus.nativeUI.alert("打开数据库失败"); 
            callback(e);
        }
    })
}
 
 
export {
    openComDB,
    closeComDB,
    executeSQL
}