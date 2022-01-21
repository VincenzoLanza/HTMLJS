
const file_json=require('./orders.json')
const righe=file_json
function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < Object.keys(righe).length; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 3; j++) {
        if (i ==  Object.keys(righe).length && j == 2) {
          break
        } else {
          var td = document.createElement('td');
          td.appendChild(document.createTextNode(Object.values(righe)[i]))
          i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
          tr.appendChild(td)
        }
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }
tableCreate();