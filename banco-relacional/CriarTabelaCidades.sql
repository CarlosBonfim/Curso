Create table if not exists cidades (
    id INT UNSIGNED not NULL AUTO_INCREMENT,
    nome VARCHAR(255) not NULL,
    estado_id int UNSIGNED not null,
    area DECIMAL (10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) references estados(id)
);

-- CREATE TABLE IF NOT exists TESTE (ID INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY);
-- DROP TABLE IF EXISTS teste;