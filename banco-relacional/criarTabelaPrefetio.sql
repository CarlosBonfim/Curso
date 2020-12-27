create table prefeitos (
    id int UNSIGNED not null auto_increment, 
    nome varchar(255) not null, 
    cidade_id int UNSIGNED, 
    PRIMARY key (id), 
    UNIQUE key (cidade_id), 
    FOREIGN key (cidade_id) references cidades (id)
);


