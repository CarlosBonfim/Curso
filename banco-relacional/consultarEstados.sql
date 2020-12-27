select * from estados;
select sigla, nome as 'Nome do Estado' from estados WHERE regiao = 'sul';
select sigla, nome as 'Nome do Estado' from estados WHERE populacao >= 10;
select sigla, nome, populacao as 'Nome do Estado' from estados WHERE populacao >= 10 order by populacao desc;
