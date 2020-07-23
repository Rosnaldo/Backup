#!/bin/bash

arquivo=/home/andrey/Transferências/unix_testes/scripts/listanomes.txt

for nomes in `cat $arquivo`
do
	echo $nomes
done
