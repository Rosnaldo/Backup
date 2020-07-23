#!/bin/bash

ping www.google.com.br -c 1 >/dev/null;

if [ "$?" = "0" ] ;
then
   echo "Conexao ativa";
else
   echo "Restabelecendo a conexao"
   /usr/bin/pon dsl-provider >/dev/null;
fi

