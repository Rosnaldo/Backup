#!/bin/bash

mkdir Guilherme

var1="Marcelo"
var2="Joao"
var3="Guilherme"

if ls $var1
then 
	echo "Diretorio $var1 encontrado"
elif ls $var2
then
	echo "Diretorio $var2 encontrado"
elif ls $var3
then
	echo "Diretorio $var3 encontrado"
else
	echo "Nao existe nenhum diretorio com esses nomes"
fi


if cd Downloads
then
	echo "Diretorio encontrado"
else
	echo "Diretorio nao encontrado"
fi


if [ $USER = andrey ] && [ -x operadores2.sh ]
then 
	echo "O usuario eh o $USER e tem permissao sobre o arquivo"
else
	echo "Ou o usuario n eh root ou nao tem permissao sobre o arquivo"
fi


read -p "Digite um numero " num1

read -p "Digite o segundo numero " num2

echo "scale=2;$num1 / $num2" | bc

#a(){

#}
#a

read IDADE

if [ $IDADE -gt 17 ]
then
    echo "Voce eh maior de idade"
else
    echo "Você é menor de idade!"
fi   


case $1 in
   "-h") echo "Isto seria uma ajuda... Mas fiquei com preguiça de escrevê-la."
         ;;
   "-v") echo "Versão 666."
         ;;
   *) echo "Opção inválida!"
      exit 1
      ;;
esac




