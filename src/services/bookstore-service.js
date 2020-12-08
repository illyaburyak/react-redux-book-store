

export default class BookstoreService {

     data = [
        {
            id: 1,
            title: 'Functional programming in Javascript',
            author: 'Susan J. Fowler',
            price: 54,
            coverImage: 'https://images.manning.com/book/5/c5bd123-f4fd-4a03-9069-9309c782ea7e/Atencio_hires_Fc.png'
        },
        {
            id: 2,
            title: 'JavaScript & Jquery',
            author: 'Michael Buryak',
            price: 23,
            coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88V3eQWAfwdQaFb_F8xcm3AcXBe0b_Dovzg&usqp=CAU'

        },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75){
                    reject(new Error('something bad'));
                } else {
                    resolve(this.data)
                }
            }, 700)
        })
    }
}