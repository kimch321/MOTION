import { Component } from "./components/component";
import { ImageComponent } from "./components/item/image.js";
import { NoteComponent } from "./components/item/note.js";
import { TodoComponent } from "./components/item/todo.js";
import { VideoComponent } from "./components/item/video.js";
import { Composable, PageComponent } from "./components/page/page.js";

class App{
    private readonly page: Component & Composable
    constructor(appRoot: HTMLElement) {
        // 컴포넌트 안에 인스턴스를 만드는 것은 좋지 않다. 디펜던티 인젝션을 이용해 주입 받는 것이 좋다.
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image)
        
        const video = new VideoComponent('Video Title', 'https://youtu.be/K3-jG52XwuQ')
        this.page.addChild(video)
        
        const note = new NoteComponent('Note Title', 'Note Body');
        this.page.addChild(note)

        const todo = new TodoComponent('Todo Title','Todo item');
        this.page.addChild(todo)
    }
}

new App(document.querySelector('.document')! as HTMLElement)