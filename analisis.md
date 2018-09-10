Universidad del Valle de Guatemala<br>
Sistemas y Tecnologías Web <br>
Samuel Chavez <br>
Javier Ramos - 16230

# Lab 07: Reddit

## State
```json
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


