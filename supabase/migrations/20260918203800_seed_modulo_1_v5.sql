-- Seed Módulo 1 v5
-- Supabase migration: 20260918203800_seed_modulo_1_v5
-- Reproducible seed generated from the applied database state.
-- Do not re-run against a database that already contains this seed.

insert into courses (slug,title,description) values
('curso-panaderia','Curso de Panadería y Repostería','Ruta progresiva de aprendizaje basada en técnicas, recetas, observación y diagnóstico.');

insert into modules (course_id,slug,title,sort_order,guiding_question,expected_result)
values
((select id from courses where slug='curso-panaderia'),'modulo-1-masas-batidas-pesadas','Entrar a la panadería: masas batidas pesadas',1,'¿Qué estoy haciendo cuando mezclo una masa y cómo sé cuándo dejar de trabajarla?','Ejecutar tres MBP con métodos distintos y describir qué se observa durante la mezcla y el horneado.');

insert into lessons (module_id,slug,title,sort_order,lesson_type,objective)
values
((select id from modules where slug='modulo-1-masas-batidas-pesadas'),'entrar-a-la-panaderia','Entrar a la panadería',1,'lesson',null),
((select id from modules where slug='modulo-1-masas-batidas-pesadas'),'primer-panque-acremado','Primer panqué: acremado',2,'lesson','Identificar ingredientes básicos de pastelería y conocer la técnica de acremado en las MBP.'),
((select id from modules where slug='modulo-1-masas-batidas-pesadas'),'segunda-ruta-aceite','Segunda ruta: aceite',3,'lesson','Elaborar y hornear una MBP con una técnica distinta a la de acremado.'),
((select id from modules where slug='modulo-1-masas-batidas-pesadas'),'repeticion-con-criterio','Repetición con criterio',4,'lesson','Repetir el método de acremado observando sus etapas y evitando sobrebatir al incorporar los secos.'),
((select id from modules where slug='modulo-1-masas-batidas-pesadas'),'el-horno-tambien-es-parte','El horno también es parte',5,'lesson','Reconocer las condiciones de cocción indicadas para una masa batida pesada.'),
((select id from modules where slug='modulo-1-masas-batidas-pesadas'),'mini-reto-que-cambio','Mini reto: ¿qué cambió?',6,'lesson',null);

insert into recipes (slug,title,source_id,source_class,source_objective,source_demo,difficulty,source_time,source_yield,pedagogical_role,production_enabled,validation_status)
values
('marmoleado-intenso-cafe','Marmoleado Intenso de Café',null,1,'El alumno aprenderá a identificar ingredientes básicos de pastelería, también conocerá la técnica de acremado en las MBP.',false,'*',null,'1 pieza rectangular','repeticion_acremado_y_marmoleado',false,'draft'),
('panque-citricos','Panqué de Cítricos',null,2,'Conocer las masas batidas pesadas, características, métodos de elaboración, y formas de cocción.',false,'**','60 min.','1 pieza de 11*25cm','practica_acremado_y_coccion',false,'draft'),
('panque-platano-streusel-canela','Panqué de Plátano y Streusel de Canela',null,1,'El alumno aprenderá a elaborar y hornear MBP, con una técnica distinta a la de acremado.',false,'*',null,'1 pieza rectangular','practica_metodo_distinto',false,'draft'),
('rosca-pina-colada','Rosca de Piña Colada',null,1,'El alumno aprenderá a identificar ingredientes básicos de pastelería, también conocerá la técnica de acremado en las MBP.',false,'*',null,'1 rosca grande o 2 coronas chicas','practica_acremado',false,'draft');

insert into lesson_recipes (lesson_id,recipe_id,sort_order)
values
((select id from lessons where slug='primer-panque-acremado'),(select id from recipes where slug='rosca-pina-colada'),1),
((select id from lessons where slug='segunda-ruta-aceite'),(select id from recipes where slug='panque-platano-streusel-canela'),1),
((select id from lessons where slug='repeticion-con-criterio'),(select id from recipes where slug='marmoleado-intenso-cafe'),1),
((select id from lessons where slug='el-horno-tambien-es-parte'),(select id from recipes where slug='panque-citricos'),1);

insert into recipe_ingredients (recipe_id,sort_order,name,quantity,unit,notes)
values
((select id from recipes where slug='panque-citricos'),1,'Mantequilla',225,'gr',null),
((select id from recipes where slug='panque-citricos'),2,'Azúcar',225,'gr',null),
((select id from recipes where slug='panque-citricos'),3,'Huevos',4,'pzas',null),
((select id from recipes where slug='panque-citricos'),4,'Harina',270,'gr',null),
((select id from recipes where slug='panque-citricos'),5,'Polvo de hornear',5,'gr',null),
((select id from recipes where slug='panque-citricos'),6,'Limón',1,'pza','Jugo y ralladura'),
((select id from recipes where slug='panque-citricos'),7,'Naranja',1,'pza','Jugo y ralladura'),
((select id from recipes where slug='panque-citricos'),8,'Azúcar glass',225,'gr','Para el glaseado'),
((select id from recipes where slug='panque-citricos'),9,'Limón',10,'ml','Jugo y ralladura, para el glaseado'),
((select id from recipes where slug='panque-citricos'),10,'Naranja',10,'ml','Jugo y ralladura, para el glaseado'),
((select id from recipes where slug='rosca-pina-colada'),1,'Mantequilla',150,'g',null),
((select id from recipes where slug='rosca-pina-colada'),2,'Azúcar glass',150,'g',null),
((select id from recipes where slug='rosca-pina-colada'),3,'Huevos',3,'piezas',null),
((select id from recipes where slug='rosca-pina-colada'),4,'Leche de coco',100,'ml',null),
((select id from recipes where slug='rosca-pina-colada'),5,'Coco Rapé',50,'g','Tostado'),
((select id from recipes where slug='rosca-pina-colada'),6,'Harina',250,'g',null),
((select id from recipes where slug='rosca-pina-colada'),7,'Polvo para hornear',15,'g',null),
((select id from recipes where slug='rosca-pina-colada'),8,'Piña cristalizada',120,'g','Cortada en cubos pequeños'),
((select id from recipes where slug='rosca-pina-colada'),9,'Mantequilla y harina',null,'c/s','Para encamisar'),
((select id from recipes where slug='rosca-pina-colada'),10,'Azúcar glass',150,'g','Para el glaseado'),
((select id from recipes where slug='rosca-pina-colada'),11,'Leche de coco',45,'ml','Para el glaseado'),
((select id from recipes where slug='rosca-pina-colada'),12,'Coco Rapé',15,'g','Tostado, para el glaseado'),
((select id from recipes where slug='panque-platano-streusel-canela'),1,'Harina',300,'g',null),
((select id from recipes where slug='panque-platano-streusel-canela'),2,'Sal',3,'g',null),
((select id from recipes where slug='panque-platano-streusel-canela'),3,'Polvo para hornear',5,'g',null),
((select id from recipes where slug='panque-platano-streusel-canela'),4,'Canela',2,'g',null),
((select id from recipes where slug='panque-platano-streusel-canela'),5,'Aceite de canola',190,'g',null),
((select id from recipes where slug='panque-platano-streusel-canela'),6,'Plátano tabasco',380,'g','Muy maduros y en peso neto'),
((select id from recipes where slug='panque-platano-streusel-canela'),7,'Azúcar',200,'g',null),
((select id from recipes where slug='panque-platano-streusel-canela'),8,'Huevo',1,'pieza',null),
((select id from recipes where slug='panque-platano-streusel-canela'),9,'Esencia de vainilla',10,'ml',null),
((select id from recipes where slug='panque-platano-streusel-canela'),10,'Nuez en mitades',50,'g',null),
((select id from recipes where slug='panque-platano-streusel-canela'),11,'Pasitas',50,'g',null),
((select id from recipes where slug='panque-platano-streusel-canela'),12,'Mantequilla y harina',null,'c/s','Para encamisar'),
((select id from recipes where slug='panque-platano-streusel-canela'),13,'Mantequilla',50,'g','Para el streusel de canela'),
((select id from recipes where slug='panque-platano-streusel-canela'),14,'Azúcar',50,'g','Para el streusel de canela'),
((select id from recipes where slug='panque-platano-streusel-canela'),15,'Harina',50,'g','Para el streusel de canela'),
((select id from recipes where slug='panque-platano-streusel-canela'),16,'Canela',3,'g','Para el streusel de canela'),
((select id from recipes where slug='marmoleado-intenso-cafe'),1,'Mantequilla',280,'g',null),
((select id from recipes where slug='marmoleado-intenso-cafe'),2,'Azúcar moscabado',100,'g',null),
((select id from recipes where slug='marmoleado-intenso-cafe'),3,'Miel de abeja',140,'g',null),
((select id from recipes where slug='marmoleado-intenso-cafe'),4,'Huevo',2,'piezas',null),
((select id from recipes where slug='marmoleado-intenso-cafe'),5,'Esencia de vainilla',15,'ml',null),
((select id from recipes where slug='marmoleado-intenso-cafe'),6,'Leche',140,'ml',null),
((select id from recipes where slug='marmoleado-intenso-cafe'),7,'Harina',300,'g',null),
((select id from recipes where slug='marmoleado-intenso-cafe'),8,'Polvo para hornear',5,'g',null),
((select id from recipes where slug='marmoleado-intenso-cafe'),9,'Café instantáneo',20,'g',null),
((select id from recipes where slug='marmoleado-intenso-cafe'),10,'Leche',20,'ml','Para igualar texturas');

insert into recipe_steps (recipe_id,sort_order,title,instruction,observation,time_text,temperature_text)
values
((select id from recipes where slug='panque-citricos'),1,null,'Acremar la mantequilla con el azúcar hasta que esponje y se blanqué.',null,null,null),
((select id from recipes where slug='panque-citricos'),2,null,'Añadir los huevos de uno en uno esperando a que se integre uno para poder agregar el otro.',null,null,null),
((select id from recipes where slug='panque-citricos'),3,null,'Cernir la harina y agregarla en dos o tres partes con las ralladuras.',null,null,null),
((select id from recipes where slug='panque-citricos'),4,null,'Al final vaciar los jugos dando un aumento a la velocidad por medio minuto y sacar de la batidora.',null,null,null),
((select id from recipes where slug='panque-citricos'),5,null,'Vaciar a un molde de panqué previamente engrasado y enharinado hasta tres cuartas partes de su capacidad.',null,null,null),
((select id from recipes where slug='panque-citricos'),6,null,'Hornear a 160 grados C. Durante 35 a 40 minutos o hasta que esté dorado de la superficie.',null,'35 a 40 minutos','160 grados C.'),
((select id from recipes where slug='panque-citricos'),7,null,'Retirar del horno y desmoldar en una rejilla.',null,null,null),
((select id from recipes where slug='panque-citricos'),8,null,'Colar el azúcar glass y colocar en un recipiente.',null,null,null),
((select id from recipes where slug='panque-citricos'),9,null,'Poco a poco incorporar los jugos batiendo enérgicamente para que se incorporen correctamente.',null,null,null),
((select id from recipes where slug='panque-citricos'),10,null,'Una vez que obtengamos una textura semi liquida reservar cubierto con film en contacto.',null,null,null),
((select id from recipes where slug='rosca-pina-colada'),1,null,'Acremar la mantequilla con el azúcar glass hasta suavizar.',null,null,null),
((select id from recipes where slug='rosca-pina-colada'),2,null,'Agregar los huevos uno a uno y batiendo en cada adición.',null,null,null),
((select id from recipes where slug='rosca-pina-colada'),3,null,'Agregar el coco tostado.',null,null,null),
((select id from recipes where slug='rosca-pina-colada'),4,null,'Cernir la harina y el polvo para hornear.',null,null,null),
((select id from recipes where slug='rosca-pina-colada'),5,null,'Incorporar de manera intercalada la leche de coco y los secos. No sobre batir la preparación.',null,null,null),
((select id from recipes where slug='rosca-pina-colada'),6,null,'Añadir la piña cristalizada con movimientos envolventes fuera de la batidora.',null,null,null),
((select id from recipes where slug='rosca-pina-colada'),7,null,'Colocar en molde encamisado y hornear a 170º C entre 20 y 30 minutos aproximadamente.',null,null,'170º C'),
((select id from recipes where slug='rosca-pina-colada'),8,null,'Enfriar, desmoldar y cubrir con el glaseado de coco.',null,null,null),
((select id from recipes where slug='rosca-pina-colada'),9,null,'Para el glaseado: cernir el azúcar glass y agregar la leche de coco poco a poco para lograr una consistencia fluida pero consistente.',null,null,null),
((select id from recipes where slug='rosca-pina-colada'),10,null,'Cubrir la rosca con el glaseado y espolvorear con el coco rapé.',null,null,null),
((select id from recipes where slug='panque-platano-streusel-canela'),1,null,'Cernir la harina, sal, polvo para hornear y canela.',null,null,null),
((select id from recipes where slug='panque-platano-streusel-canela'),2,null,'Licuar el aceite, plátanos, azúcar, huevo y esencia de vainilla. Debe quedar una mezcla homogénea y sin grumos.',null,null,null),
((select id from recipes where slug='panque-platano-streusel-canela'),3,null,'En un bol mezclar de manera envolvente el licuado de plátanos junto con los secos cernidos. No sobre batir. Incorporar las nueces picadas y pasitas.',null,null,null),
((select id from recipes where slug='panque-platano-streusel-canela'),4,null,'Colocar en molde rectangular y espolvorear con el streusel de canela.',null,null,null),
((select id from recipes where slug='panque-platano-streusel-canela'),5,null,'Hornear a 160º C por 1 hora',null,'1 hora','160º C'),
((select id from recipes where slug='panque-platano-streusel-canela'),6,null,'Dejar enfriar y desmoldar.',null,null,null),
((select id from recipes where slug='panque-platano-streusel-canela'),7,null,'Para el streusel de canela: cortar la mantequilla fría en cubos pequeños y formar una arenilla junto con el azúcar, harina y canela.',null,null,null),
((select id from recipes where slug='marmoleado-intenso-cafe'),1,null,'Acremar la mantequilla con el azúcar moscabado, incorporar en forma de hilo la miel y continuar batiendo hasta esponjar y tener una crema suave y untuosa.',null,null,null),
((select id from recipes where slug='marmoleado-intenso-cafe'),2,null,'Agregar los huevos uno a uno y batiendo en cada adición.',null,null,null),
((select id from recipes where slug='marmoleado-intenso-cafe'),3,null,'Mezclar la leche con la vainilla y cernir la harina junto con el polvo para hornear.',null,null,null),
((select id from recipes where slug='marmoleado-intenso-cafe'),4,null,'Incorporar a la mantequilla y de manera intercalada la leche y los secos sin sobre batir.',null,null,null),
((select id from recipes where slug='marmoleado-intenso-cafe'),5,null,'Dividir la mezcla a la mitad.',null,null,null),
((select id from recipes where slug='marmoleado-intenso-cafe'),6,null,'Disolver el café instantáneo en la leche y mezclar con una parte de la preparación de vainilla. No es necesario ocupar toda la cantidad de leche marcada.',null,null,null),
((select id from recipes where slug='marmoleado-intenso-cafe'),7,null,'En un molde previamente encamisado, colocar las dos mezclas de panqué de manera intercalada, marmolear con un palillo.',null,null,null),
((select id from recipes where slug='marmoleado-intenso-cafe'),8,null,'Hornear a 170º C por 40 minutos.',null,'40 minutos','170º C'),
((select id from recipes where slug='marmoleado-intenso-cafe'),9,null,'Enfriar y desmoldar.',null,null,null);
