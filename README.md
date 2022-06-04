# Vue магазин
## Урок первый
Знакомсвто с vue. Иду по стопам видео, где обещается сделать интрент магазин.
Нового за урок я узнал:

- axios - тот же ajax, но видимо лучше
- json-serve - установлен глобально, дает фейковый АПИ

В самом vue уже есть babel eslint, видимо где то встроен hot module,
хотя если припомнить, то во ve сидит виртуальное DOM дерево,
 а это вроде как лучше обычной проверки hot модуля.

Поставили сразу препорцессоры sass

## Урок второй
За второй урок я увидел базовые вложения родителей и детей,
 заодно познакомили с vue devtools(его основу, видно теперь степень вложенность компонентов).
 Важно понимать, что детей импортируют к родителям, потом указываеют явно в компонентах их имена и
 наконец встраивают самозакрывающимся тегом в html родителя.

## Урок третий
На третьем уроке мы познакомились с v-for и v-bind, создали циклом элементы карточек товара,
 связали данные родителя к детям, и излучили данные детей обратно родителю для работы с ними.

###Код для отображения детей

<img width="80%" src="presentation/catalog.png">

###Код самого ребенка и его обратное излучение(emit) данных

<img width="80%" src="presentation/item.png">
<img width="80%" src="presentation/emit.png">

### Демо результата

<img width="80%" src="presentation/third_lesson.gif">

 Из важного стоит отметить require метод в :src пути для адекватного отображения картинок

 <img width="100%" src="presentation/require.png">

## Урок четвертый
Данный урок дался очень тяжело, нас познакомили с Vuex, впервые сталкиваемся с мутаторами, действиями, статикой и геттерами, их принцип взаимодействия для 
меня запутан и не поддается пониманию, просто копипастить идею не даст эффективных результатов, продвижение к интеренет магазину приотсанавливается, будет открыта новая ветка vuex_test для детального изучения. 
