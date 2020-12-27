insert into cidades (nome, area, estado_id) VALUES ('Campinas', 795, 25);
insert into cidades (nome, area, estado_id) VALUES ('Niterói', 133, 19);
insert into cidades (nome, area, estado_id) VALUES ('Caruaru', 920.6, (select id from estados where sigla = 'PE'));
insert into cidades (nome, area, estado_id) VALUES ('juazeiro', 248, (select id from estados where sigla = 'CE'));
