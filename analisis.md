Universidad del Valle de Guatemala<br>
Sistemas y Tecnologías Web <br>
Samuel Chavez <br>
Javier Ramos - 16230

# Lab 07: Reddit

## State
```javascript
state = {
  posts: {
    byId: {
      id: {
        id: '',
        title: '',
        content: '',
        comments: [...ids],
        karma: 0,
      },
    },
    order: [...ids],
  },

  comments: {
    byId: {
      id: {
        id: '',
        text: '',
      }
    },
    order: [...ids]
  },

}
```

* **posts:** Se encontraran todos los post realizados
  * **byId:** Tendrá la información pertinente de cada post.
    * **id:** El id del post
    * **title:** El titulo del post
    * **content:** El contenido del post
    * **comments:** Una lista de ids de commentarios relacionados con este post.
    * **karma:** Cantidad de karma que el post
  * **order:** Una lista de ids de posts, para establecer orden
* **comments:** Se encontraran todos los commentarios
  * **byId:** Tendrá la información pertinente de cada commentario.
    * **id:** El id del comentario.
    * **text:** El contenido del comentario
  * **order:** Una lista de ids de comentarios, para establecer orden

# Types

1. "KARMA_SETTED"
2. "POSTED"
3. "COMMENTED"

# Action Creators

#### SetKarma:
* **params:** 
  * **up**: valor para saber si es un upvote o un downvote (booleano).
  * **id**: identificador del post al cual darle o quitarle karma.
* **return:** 
  * **type:** "KARMA_SETTED"
  * **payload:** 
    * **up:** valor para saber si es un upvote o un downvote (booleano).
    * **id**: identificador del post al cual darle o quitarle karma.

#### Post:
* **params:** 
  * **title**: El titulo de la publicación (String).
  * **content**: Contenido de la publicación (String).
* **return:** 
  * **type:** "POSTED"
  * **payload:** 
    * **title**: El titulo de la publicación (String).
    * **content**: Contenido de la publicación (String).

#### Comment:
* **params:** 
  * **id**: Identificador de la publicación (String).
  * **text**: Contenido del comentario (String).
* **return:** 
  * **type:** "COMMENTED"
  * **payload:** 
    * **id**: Identificador de la publicación (String).
    * **text**: Contenido del comentario (String).

## Reducers

* **posts**
  * **type:** Lista de objetos.
  * **default:** []
  * **purpose:** Mantener almacenados los posts.
    * **byid:** 
      * **type:** objeto.
      * **default:** {}
      * **purpose:** Alamacenar los posts.
    * **order:** 
      * **type:** Lista.
      * **default:** []
      * **purpose:** Guardar el order de los elementos en el byid.
* **comments**
  * **type:** Lista de objetos.
  * **default:** []
  * **purpose:** Mantener almacenados los posts
    * **byid:**
      * **type:** Almacenar los commentarios.
      * **default:** {}
      * **purpose:** Mantener almacenados los posts
    * **order:**
      * **type:** Lista.
      * **default:** []
      * **purpose:** Mantener almacenados los posts

