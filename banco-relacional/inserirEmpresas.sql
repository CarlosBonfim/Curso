insert into empresas (nome, cnpj)
VALUES  
    ('Bradesco', 6523186435),
    ('Vale', 135481534),
    ('Cielo', 1513253132);

alter table empresas modify cnpj varchar(14);

insert into empresas_unidades (empresa_id, cidade_id, sede) values 
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1
