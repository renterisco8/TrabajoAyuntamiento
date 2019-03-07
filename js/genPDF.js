var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAABnCAYAAADsZsUxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACXrSURBVHhe7d0J3FVF+cDxXJBYFEQREbdKcxcFlMRccM9KM7dS08w1N1DIcgncWzQXUDRFTU3R1LJM3PdcUlMUEQsQNEkkRRINCOj53+/wDl5e2f+a98o8n898zrnnnjNnLpzfPOuc9zNRpEiRupICbZEidSYF2iJF6kwKtEWK1JkUaIsUqTMp0BYpUmdSoC1SpM6kQFukSJ1JgbZIkTqTAm2RInUmBdoiRepMCrRFitSZFGiLFKkzKdAWKVJnUqAtUqTOpGagnTFjRsPe/06mT58e06ZNS+2VV16JX/7ylzF27Nh0/L///W/DWUWK1JYUaCvAvvnmm3HKKafElVdeGaeeemq89dZbBdoiNSuLDbQZQtvcMrQTJ06MAQMGxM9//vOkbd999900nupztSJFakEWC2j1nSG0zbDa/uc//4kJEybEeeedl7Rtv379ErS+q27OL+AWqQVZLKCthjVvp0yZElOnTk0w3nfffXHYYYfF+eefH4ccckg88cQT6bjvnWdfc21uBeAin5R8KqAFUONWDVfe/9e//hVPPfVU/PrXv44zzjgj+vbtG1dffXVccsklceihh8ZFF10U3/nOd+Lyyy9PZrLvzznnnLjuuuvi2WefjUmTJs3SvLnvebUiRT4OqXtowZHNV6auRkP++9//jsmTJ6dmf8iQIXHiiSfGl7/85dhiiy2ie/fuaX+bbbZJbauttkrAbrnllrHtttvGdtttl47b79atW9oyn4cPH576fP/995MWrtbY7p0nCGMq4Bb5OKTuoc2AaEAaOnRo0pSnn3569OzZM4488sjo0aNH7LLLLtGlS5c48MADU9DpD3/4Q/z2t7+N/v37x9577x177LFHbLLJJrH99tvHfvvtF1dcccWsc5jN++yzT7r+G9/4Rnz/+99P7dhjj00a+6qrrooXXnghTQ7GA+CibYt8XFKX0GYgcqPh/va3v0WfPn2SpqQhd95559h1112TRt14441jww03TOmcMWPGJM2oAd21jzzySOy///5J8+65557x/PPPJ/CyBnfuiBEjkqbeYIMNUttxxx3TROA+rqOJmdLyvflav6mA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';

var nombre = document.getElementById('nombre_mod').value;
var apellido1 = document.getElementById('ape1_mod').value;
var apellido2 = document.getElementById('ape2_mod').value;
var nif = document.getElementById('nif_mod').value;
var pais = document.getElementById('pais_mod').value;
var municipio = document.getElementById('ciudad_mod').value;

//var fechaHoy = "";
var fechaHoy = document.getElementById('fechhoy_mod').value;
var fechaNac = document.getElementById('fechnac_mod').value;

var delito = document.getElementById('delito_mod').value;
var biologia = document.getElementById('estado_mod').value;

	function delitosSexualesPDF() {
						
			var doc = new jsPDF();

			doc.addImage(img,'jpeg',0,0,80,40)
			doc.setFontSize(12)
			doc.text(10,45,'REGISTRO CENTRAL DE')
			doc.text(10,50,'DELINCUENTES SEXUALES')
			doc.text(20,70,'CERTIFICA:')
			doc.setFontSize(10)
			doc.text(20,75,'Que, en el dia ' + fechaHoy + ' del Registro central de Delincuentes sexuales ' +  delito + ' CONSTA informacion')
			doc.text(20,80,'relativa a:')
			doc.setFontSize(12)
			doc.text(50,90,'D./Dª ' + nombre + ' ' + apellido1 + ' ' + apellido2 )
			doc.text(120,90, ' con NIF nº' + nif + ".")
			doc.setFontSize(10)
			doc.text(20,100,'Conforme a lo dispuesto en la Decisión Marco 2009/315/JAI del Consejo de 26 de febrero, relativa a la')
			doc.text(20,105,'organización y al contenido del intercambio de información de los registros de antecedntes penales entre')
			doc.text(20,110, 'los Estados miembros, trátandose de ciudadanos españoles, el presente certificado incluye, en su caso, ')
			doc.text(20,115,'las condenas impuestas por otros Estados miembros de la Unión Europea, en los mismos términos en que ')
			doc.text(20,120,'tales condenas hayan sido notificadas, sin que exista necesariamente una equiparación entre los tipos')
			doc.text(20,125,'delictivos del Estado de condena y los tipos delictivos nacionales.')

			doc.save('Certificado_Delitos_Naturaleza_Sexual.pdf')

	}

	function empadronamientoPDF() {
		var doc = new jsPDF();

		doc.addImage(img,'jpeg',0,0,80,40);
		
		doc.setFontSize(12);
		doc.text(10,45,'Ayuntamiento de Tabaiba (SANTA CRUZ DE TENERIFE)');
		doc.text(10,50,'Padrón Municipal')
		doc.text(10,55,'Código Municipal: 201814')
		doc.setFontSize(13)
		doc.text(40,70,'DOÑA JACINTA RAMÍREZ, SECRETARIO/A')
		doc.text(30,75,'DEL AYUNTAMIENTO DE TABAIBA, SANTA CRUZ DE TENERIFE')
		doc.setFontSize(12)
		doc.text(10,85,'CERTIFICO QUE:')
		doc.text(15,95,'Don/Doña ' + nombre + ' ' + apellido1 + ' ' + apellido2 + ', con D.N.I '+ nif +', nacido en ' + pais + ' y fecha de ')
		doc.text(10,100,'nacimiento ' + fechaNac + ', figura en el día de hoy como residente en el vigente padrón municipal ')
		doc.text(10,105,'de Habitantes de este Ayuntamiento.')
		doc.text(15,115,'Y para que conste a los efectos e lo dispuesto en el Real Decreto 1316/2001, sobre certificaciones')
		doc.text(10,120,'de residencia a efectos de la obtención de la bonificación de las tarifas y determinacion del procedi-')
		doc.text(10,125,'miento de liquidacion para subenciones de tráfico regular entre islas Canarias, Ceuta y Melilla y las')
		doc.text(10,130,'islas Baleares, expido el presente certificado de orden y con el visto bueno del Sr. Alcalde en ' + municipio)
		doc.text(10,135,' a día ' + fechaHoy)
		doc.text(15,145,'El presente certificado caduca a los seis meses contados a partir del dia al de la fecha ')
		doc.text(10,150,'de su expedicion(Art. 3 del RD 1316/2001)')
		doc.setFontSize(13)
		doc.text(45,165,'VªBª EL')
		doc.text(30,170,'ALCALDE-PRESIDENTE')

		doc.text(140,170,'SECRETARIA')

		doc.save('empadronamiento.pdf')
	}

	function feDeVidaYEstado() {
		var doc = new jsPDF();

		doc.addImage(img,'jpeg',0,0,80,40);
		
		doc.setFontSize(13);
		doc.text(80,60,"FE DE VIDA Y ESTADO")
		doc.setFontSize(11);
		doc.text(20,80,'Registro Civil de  ' + nombre + ' ' + apellido1 + ' ' + apellido2 )
		doc.text(20,85,"FE DE VIDA")
		doc.text(20,95,"El encargado de este Registro Civil, que subscribe")
		doc.text(20,105,"CERTIFICA: que en virtud de lo acordado en esta fecha en expediente traado con arreglo del articulo")
		doc.text(20,110,"364 del Reglamento del registro Civil, se declara, con valor de simple presuncion que")
		doc.text(20,120,"D/Dña " + nombre + ' ' + apellido1 + ' ' + apellido2 + " hijo/a de tururu y de tarara natural de " + municipio + " y con ")
		doc.text(20,125,"domicilio en " + municipio + " su estado es de " + biologia + "." )

		doc.text(20,135,"En Tabaiba en " + fechaHoy + ".")

		doc.text(20,145,"Don Alejandro Martín Etxeberria Secretario/a")

		doc.save('Fe_de_vida_y_estado.pdf')
	}