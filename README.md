# TreinoGit  
![git](https://avatars0.githubusercontent.com/u/48369317?s=460&u=680878e27fea3e89349b8bcfccd9fb4bd61d5615&v=4)

1. Crie um repositório em seu Github chamado TreinoGit;
~~~
git clone https://github.com/keitepassos/TreinoGit.git
~~~
2. Dentro dele crie 3 arquivos:
* Um arquivo .html
* Um arquivo .css
* Um arquivo .js

3. Crie uma página simples no html, com um css simples e um  js básico;

4. Adcione esses arquivos e dê um commit um por um no repositório, documentando o que você fez;
~~~
git add index.html

git commit -m "commit html"

git add script.js

git commit -m "commit js"

git add estilo.css

git commit -m "commit css"
~~~
5. Suba o projeto no repositório remoto;
~~~
git push origin master
~~~

6. Crie uma branch teste e, dentro dela, altere os 3 arquivos criados;
~~~
git checkout -b teste
~~~
_OU_
~~~
git branch teste 

git checkout teste
~~~


7. Faça o passo 4 novamente e suba sua branch teste no repositório remoto;
~~~
git add index.html

git commit -m "commit branch teste arquivo html"

git add script.js

git commit -m "commit branch teste arquivo' js"

git add estilo.css
git commit -m "commit branch teste arquivo css"

git push origin teste
~~~
8. Por fim, dê um merge com a branch master e suba no respositório;
~~~
git checkout master

git merge teste

git add .

git commit -m "Merge branch teste"

git push origin master
~~~

