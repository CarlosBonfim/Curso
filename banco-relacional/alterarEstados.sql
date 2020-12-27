update estados set nome = 'Maranhão' WHERE sigla = 'MA' ;

SELECT * FROM `estados` WHERE sigla = 'AM';
SELECT est.nome FROM estados est as sigla WHERE id = 20;
update estados set nome = 'Paraná', populacao = 11.32 where sigla = 'PR';