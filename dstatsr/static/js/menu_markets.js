function actualizarLista() {
    var dropdown = document.getElementById("mktSelector");
    var selectedSeccion = dropdown.options[dropdown.selectedIndex].value;

    // Hard-coded set de enlaces basados en la sección seleccionada
    var enlaces = obtenerEnlacesHardCoded(selectedSeccion);

    var listaEnlaces = document.getElementById("lista-enlaces");
    listaEnlaces.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    // Agregar los enlaces a la lista
    enlaces.forEach(function(enlace) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = enlace.url;
        a.textContent = enlace.texto;
        li.appendChild(a);
        listaEnlaces.appendChild(li);
    });
}

function obtenerEnlacesHardCoded(seccion) {
    // Enlaces hard-coded basados en la sección seleccionada
    var enlaces = [];
    if (seccion === "Perlas naturales y cultivadas") {
        enlaces = [
            { url: "markets/71", texto: "Perlas naturales o cultivadas, piedras preciosas o semipreciosas, metales preciosos, chapados de metales preciosos y manufacturas de estas materias; bisutería; monedas" },
        ];
    } else if (seccion === "Animales y productos animales") {
        enlaces = [
            { url: "markets/01", texto: "Animales vivos" },
            { url: "markets/02", texto: "Carne y despojos comestibles" },
            { url: "markets/03", texto: "Peces y crustáceos, moluscos y otros invertebrados acuáticos" },
            { url: "markets/04", texto: "Productos lácteos; huevos de ave; miel natural; productos comestibles de origen animal no especificados ni incluidos en otra parte" },
            { url: "markets/05", texto: "Productos de origen animal, no especificados ni incluidos en otra parte" }
        ];
    } else if (seccion == "Armas y munición") {
        enlaces = [
            { url: "markets/93", texto: "Armas y municiones; sus partes y accesorios" }
        ];
    } else if (seccion == "Artículos manufacturados variados") {
        enlaces = [
            { url: "markets/94", texto: "Muebles; ropa de cama, colchones, somieres, cojines y artículos similares de peluche; lámparas y aparatos de alumbrado no expresados ni comprendidos en otra parte; anuncios luminosos, placas indicadoras luminosas y artículos similares; construcciones prefabricadas" },
            { url: "markets/95", texto: "Juguetes, juegos y artículos deportivos; sus partes y accesorios" },
            { url: "markets/96", texto: "Artículos manufacturados diversos" }
        ];
    } else if (seccion == "Calzado y protección para la cabeza") {
        enlaces = [
            { url: "markets/64", texto: "Calzado, polainas y artículos similares; partes de estos artículos" },
            { url: "markets/65", texto: "Cascos y sus partes" },
            { url: "markets/66", texto: "Paraguas, sombrillas, bastones, bastones asiento, látigos, fustas y sus partes" },
            { url: "markets/67", texto: "Plumas y plumón preparados y artículos de plumas o plumón; flores artificiales; artículos de cabello humano" }
        ];
    } else if (seccion == "Cueros y pieles brutas y curtidas") {
        enlaces = [
            { url: "markets/41", texto: "Cueros y pieles en bruto (excepto peletería) y cuero" },
            { url: "markets/42", texto: "Artículos de cuero; artículos de guarnicionería y talabartería; artículos de viaje, bolsos de mano y continentes similares; artículos de tripa animal (excepto tripa de gusano de seda)" },
            { url: "markets/43", texto: "Peletería y pieles artificiales; fabricación de peletería" }
        ];
    } else if (seccion == "Grasas y aceites animales o vegetales") {
        enlaces = [
            { url: "markets/15", texto: "Grasas y aceites animales o vegetales y sus productos de desdoblamiento; grasas alimenticias elaboradas; ceras animales o vegetales" }
        ];
    } else if (seccion == "Instrumentos de precisión") {
        enlaces = [
            { url: "markets/90", texto: "Instrumentos y aparatos de óptica, fotografía, cinematografía, medida, control, precisión, médicos o quirúrgicos; sus partes y accesorios" },
            { url: "markets/91", texto: "Relojes y sus partes" },
            { url: "markets/92", texto: "Instrumentos musicales; partes y accesorios de estos artículos" }
        ];
    } else if (seccion == "Madera y productos de madera") {
        enlaces = [
            { url: "markets/44", texto: "Madera y artículos de madera; carbón vegetal" },
            { url: "markets/45", texto: "Corcho y artículos de corcho" },
            { url: "markets/46", texto: "Manufacturas de paja, esparto o de otras materias trenzables; cestería y espartería" }
        ];
    } else if (seccion == "Maquinaria / eléctricos") {
        enlaces = [
            { url: "markets/84", texto: "Reactores nucleares, calderas, máquinas y aparatos mecánicos; sus partes" },
            { url: "markets/85", texto: "Máquinas y aparatos eléctricos y sus partes; aparatos de grabación y reproducción de sonido, aparatos de grabación y reproducción de imagen y sonido en televisión, y sus partes y accesorios" }
        ];
    } else if (seccion == "Metales comunes") {
        enlaces = [
            { url: "markets/72", texto: "Hierro y acero" },
            { url: "markets/73", texto: "Artículos de hierro o acero" },
            { url: "markets/74", texto: "Cobre y sus manufacturas" },
            { url: "markets/75", texto: "Níquel y sus manufacturas" },
            { url: "markets/76", texto: "Aluminio y sus manufacturas" },
            { url: "markets/78", texto: "Plomo y sus manufacturas" },
            { url: "markets/79", texto: "Zinc y sus manufacturas" },
            { url: "markets/80", texto: "Estaño y sus manufacturas" },
            { url: "markets/81", texto: "Los demás metales comunes; cermets; manufacturas de estas materias" },
            { url: "markets/82", texto: "Herramientas, útiles, cubiertos, cucharas y tenedores, de metal común; partes de estos artículos, de metal común" },
            { url: "markets/83", texto: "Artículos diversos de metales comunes" }
        ];
    } else if (seccion == "Obras de arte") {
        enlaces = [
            { url: "markets/97", texto: "Obras de arte, piezas de colección y antigüedades" }
        ];
    } else if (seccion == "Pasta de madera y materiales fibrosos") {
        enlaces = [
            { url: "markets/47", texto: "Pasta de madera o de otras materias fibrosas celulósicas; desperdicios y desechos de papel o cartón" },
            { url: "markets/48", texto: "Papel y cartón; artículos de pasta de papel, de papel o de cartón" },
            { url: "markets/49", texto: "Libros impresos, periódicos, fotografías y otros productos de la industria gráfica; manuscritos, mecanografiados y planos" }
        ];
    } else if (seccion == "Piedra / cristal") {
        enlaces = [
            { url: "markets/68", texto: "Artículos de piedra, yeso, cemento, amianto, mica o materiales similares" },
            { url: "markets/69", texto: "Productos cerámicos" },
            { url: "markets/70", texto: "Vidrio y cristalería" }
        ];
    } else if (seccion == "Plásticos / gomas") {
        enlaces = [
            { url: "markets/39", texto: "Plásticos y sus artículos" },
            { url: "markets/40", texto: "Caucho y sus manufacturas" }
        ];
    } else if (seccion == "Preparados alimenticios") {
        enlaces = [
            { url: "markets/16", texto: "Preparaciones de carne, de pescado o de crustáceos, moluscos u otros invertebrados acuáticos" },
            { url: "markets/17", texto: "Azúcares y productos de confitería" },
            { url: "markets/18", texto: "Cacao y preparaciones de cacao" },
            { url: "markets/19", texto: "Preparaciones de cereales, harina, almidón o leche; productos de pastelería" },
            { url: "markets/20", texto: "Preparaciones de hortalizas, frutas, frutos secos u otras partes de plantas" },
            { url: "markets/21", texto: "Preparaciones comestibles diversas" },
            { url: "markets/22", texto: "Bebestibles, alcoholes y vinagres" },
            { url: "markets/23", texto: "Residuos y desechos de las industrias alimentarias; piensos preparados" },
            { url: "markets/24", texto: "Tabaco y sucedáneos del tabaco manufacturados" }
        ];
    } else if (seccion == "Productos minerales") {
        enlaces = [
            { url: "markets/25", texto: "Sal; azufre; tierras y piedras; materiales de enlucido, cal y cemento" },
            { url: "markets/26", texto: "Minerales, escorias y cenizas" },
            { url: "markets/27", texto: "Combustibles minerales, aceites minerales y productos de su destilación; materias bituminosas; ceras minerales" }
        ];
    } else if (seccion == "Productos químicos y derivados") {
        enlaces = [
            { url: "markets/28", texto: "Productos químicos inorgánicos; compuestos orgánicos o inorgánicos de metales preciosos, de metales de las tierras raras, de elementos radiactivos o de isótopos" },
            { url: "markets/29", texto: "Productos químicos orgánicos" },
            { url: "markets/30", texto: "Productos farmacéuticos" },
            { url: "markets/31", texto: "Fertilizantes" },
            { url: "markets/32", texto: "Extractos curtientes o tintóreos; taninos y sus derivados; tintes, pigmentos y demás materias colorantes; pinturas y barnices; masillas; tintas" },
            { url: "markets/33", texto: "Aceites esenciales y resinoides; preparaciones de perfumería, de tocador o de cosmética" },
            { url: "markets/34", texto: "Jabones, agentes de superficie orgánicos, preparaciones para lavar, preparaciones lubricantes, ceras artificiales, ceras preparadas, productos para pulir o desengrasar, velas y artículos similares, pastas para modelar, «ceras dentales» y preparaciones dentales a base de yeso" },
            { url: "markets/35", texto: "Sustancias albuminoides; almidones modificados; colas; enzimas" },
            { url: "markets/36", texto: "Explosivos; productos pirotécnicos; fósforos; aleaciones pirofóricas; determinadas preparaciones combustibles" },
            { url: "markets/37", texto: "Productos fotográficos o cinematográficos" },
            { url: "markets/38", texto: "Productos químicos diversos" }
        ];
    } else if (seccion == "Productos vegetales") {
        enlaces = [
            { url: "markets/06", texto: "Árboles vivos y otras plantas; bulbos, raíces y similares; flores cortadas y follaje ornamental" },
            { url: "markets/07", texto: "Hortalizas comestibles y algunas raíces y tubérculos" },
            { url: "markets/08", texto: "Fruta comestible y frutos secos; cáscara de cítricos o melones" },
            { url: "markets/09", texto: "Café, té, mate y especias" },
            { url: "markets/10", texto: "Cereales" },
            { url: "markets/11", texto: "Productos de la molinería; malta; almidones; inulina; gluten de trigo" },
            { url: "markets/12", texto: "Semillas y frutos oleaginosos; granos, semillas y frutos diversos; plantas industriales o medicinales; paja y forraje" },
            { url: "markets/13", texto: "Laca; gomas, resinas y demás jugos y extractos vegetales" },
            { url: "markets/14", texto: "Materias vegetales para trenzar; productos vegetales no especificados ni incluidos en otra parte" }
        ];
    } else if (seccion == "Textiles") {
        enlaces = [
            { url: "markets/50", texto: "Seda" },
            { url: "markets/51", texto: "Lana, pelo fino o grueso; hilos y tejidos de crin de caballo" },
            { url: "markets/52", texto: "Algodón" },
            { url: "markets/53", texto: "Las demás fibras textiles vegetales; hilados de papel y tejidos de hilados de papel" },
            { url: "markets/54", texto: "Hilo de coser de filamentos sintéticos o artificiales, incluso acondicionado para la venta al por menor" },
            { url: "markets/55", texto: "Fibras sintéticas discontinuas" },
            { url: "markets/56", texto: "Guata, fieltro y telas sin tejer; hilos especiales; cordeles, cuerdas y cordajes, y sus manufacturas" },
            { url: "markets/57", texto: "Alfombras y otros revestimientos textiles para el suelo" },
            { url: "markets/58", texto: "Tejidos especiales; tejidos con mechones; encajes; tapices; pasamanería; bordados" },
            { url: "markets/59", texto: "Tejidos impregnados, recubiertos, revestidos o estratificados; artículos textiles de uso industrial" },
            { url: "markets/60", texto: "Tejidos de punto o ganchillo" },
            { url: "markets/61", texto: "Prendas de vestir y accesorios de vestir, de punto" },
            { url: "markets/62", texto: "Prendas de vestir y accesorios de vestir, que no sean de punto" },
            { url: "markets/63", texto: "Los demás artículos textiles confeccionados; juegos; ropa y artículos textiles usados; trapos" }
        ];
    } else if (seccion == "Transporte") {
        enlaces = [
            { url: "markets/86", texto: "Locomotoras, material rodante y sus partes; aparatos de vías férreas o similares y sus partes; aparatos mecánicos (incluso electromecánicos) de señalización del tráfico de cualquier clase" },
            { url: "markets/87", texto: "Vehículos, excepto el material rodante ferroviario, y sus partes y accesorios" },
            { url: "markets/88", texto: "Aeronaves, naves espaciales y sus partes" },
            { url: "markets/89", texto: "Buques, embarcaciones y estructuras flotantes" }
        ];
    }
    return enlaces;
}