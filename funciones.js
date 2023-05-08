let estilos_sheet = PropertiesService.getDocumentProperties()

function onOpen() {
  SpreadsheetApp.getUi().createMenu("Menu auxiliar")
    .addItem("Mostrar Barra lateral", "mostrarBarraLateral")
    .addSeparator()
    .addItem("Menu 2", "mostrarMenu2")
    .addSeparator()
    .addItem("Menu 3", "mostrarMenu3")
    .addSeparator()
    .addItem("Menu 4", "mostrarMenu4")
    .addToUi()
}

function mostrarBarraLateral(){
  let ui = HtmlService.createHtmlOutputFromFile("barraLateral").setTitle("Menu lateral")
  SpreadsheetApp.getUi().showSidebar(ui)
}

function mostrarMenu2(){
  let ui = HtmlService.createHtmlOutputFromFile("menu2").setTitle("Menu 2")
  SpreadsheetApp.getUi().showSidebar(ui)
}

function mostrarMenu3(){
  let ui = HtmlService.createHtmlOutputFromFile("menu3").setTitle("Menu 3")
  SpreadsheetApp.getUi().showSidebar(ui)
}

function mostrarMenu4(){
  let ui = HtmlService.createHtmlOutputFromFile("menu4").setTitle("Menu 4")
  SpreadsheetApp.getUi().showSidebar(ui)
}

function aplicarEstilo1(){

  let hojaActual = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  let celdaSeleccionada = hojaActual.getActiveRange()
  celdaSeleccionada.setBackground("blue")
                  .setFontColor("white")
                  .setHorizontalAlignment("center")
                  .setValue("Estilo 1")
}

function aplicarEstilo2(){

  let celdaSeleccionada = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveRange()  
  celdaSeleccionada.setBackground("green")
                  .setFontColor("white")
                  .setFontWeight("bold")                  
                  .setValue("Estilo 2")
}

function borrarEstilos(){

  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveRange().clear({formatOnly: true})
}

function borrarTodo(){

  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveRange().clear()
}

function guardarEstilo1(){

  let celdaSeleccionada = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell()  
  estilos_sheet.setProperty('size', celdaSeleccionada.getFontSize()+'')
                .setProperty('colorFondo', celdaSeleccionada.getBackground())
  return {colorFondo: estilos_sheet.getProperty('colorFondo')}

  //return {colorFondo: estilos_sheet.getProperty('colorFondo'), size: estilos_sheet.getProperty('size',)}
}

function aplicarEstiloGuardado(){
  let hojaActual = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  let celdaSeleccionada = hojaActual.getActiveRange()
  celdaSeleccionada.setFontSize(estilos_sheet.getProperty('size'))
                    .setBackground(estilos_sheet.getProperty('colorFondo'))
                    
}

function guardarEstilo(numEstilo){

  var celdaSeleccionada = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell()  
  estilos_sheet.setProperty('size' +numEstilo, celdaSeleccionada.getFontSize()+'')
                .setProperty('colorFondo' +numEstilo, celdaSeleccionada.getBackground())
  return {colorFondo: estilos_sheet.getProperty('colorFondo' +numEstilo)}

  //return {colorFondo: estilos_sheet.getProperty('colorFondo' +numEstilo, size: estilos_sheet.getProperty('size' +numEstilo}
}

function aplicarEstilo(numEstilo){
  let hojaActual = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  let celdaSeleccionada = hojaActual.getActiveRange()
  celdaSeleccionada.setFontSize(estilos_sheet.getProperty('size' +numEstilo))
                    .setBackground(estilos_sheet.getProperty('colorFondo' +numEstilo))
                    
}

//cargar estilos guardados al iniciar el menú3
function cargarEstilos(){
  return estilos_sheet.getProperties();
}

function eliminarEstilo(estilo){
  estilos_sheet.deleteProperty('colorFondo' +estilo)
  estilos_sheet.deleteProperty('size' +estilo)
}


