// Design pattern: MVC

// To fetch the data while pressing icons: event.target.nextElementSibling.firstChild

let modelController = ( () =>  {

    let data = [[3, 76, 0], [65, 56, 30], [20, 25, 15]];

    // return {
    //
    //     // Getters of the data Array
    //
    //     getLikes: (user) => {
    //         return data[user][0];
    //     },
    //
    //     getCommets: (user) => {
    //         return data[user][1];
    //     },
    //
    //     getShares: (users) => {
    //         return data[user][2]
    //     },
    //
    //     getData: () => {
    //         return data;
    //     },
    //
    //     // Setters of the data Array
    //
    //     setLikes: (user, operation) => {
    //         operation === 'inc'?data[user][0]++:data[user][0]--;
    //     },
    //
    //     setCommments: (user, operation) => {
    //         operation === 'inc'?data[user][1]++:data[user][2]--;
    //     },
    //
    //     setShares: (user, operation) => {
    //         operation === 'inc'?data[user][2]++:data[user][2]--;
    //     }
    //
    // }

})();

let viewController =( () => {

        let DOMStrings = {
            //For Icons
            optionIcons: '.option__icon',

            //For done
            done: '.done',


            //For count of likes, comments, shares
            likes: '.likes',
            comments: '.comments',
            shares: '.shares'
        };

        let toggleClasses = (event) => {
            event.classList.toggle(DOMStrings.done)
        };

        let getCount = (event) => {
            return parseInt(event.target.nextElementSibling.firstChild.textContent);
        };


        let getWhichClass = (event) => {
            console.log(`Which class: ${event.classList}`)
            let className = event.classList;

              return className.includes(DOMStrings.done)
        };

        let setCount = (event, count) => {
            event.target.nextElementSibling.firstChild.textContent = String(count);
            toggleClasses(event);
        };

        return {

            // Getters
            getDOMStrings: () => {
                return DOMStrings;
            },

            getCount: (event) => {
                return getCount(event);
            },

            getWhichClass: (event) => {
              return getWhichClass(event);
            },


            // Setters

            setCount: (event, count) => {
                setCount(event, count);
            }
        };


    }

)();




























// This is enough to simulate the WP-Assignment



let Controller = ( () => {
        let setUpEventListeners = () => {

            //Listening event on the icons when they are clicked
            let iconsClick = document.querySelectorAll('.option__icon');
            iconsClick = [...iconsClick];
            iconsClick.forEach(current => {
                current.addEventListener('click', fetchOperation);
            });

        };

        let fetchOperation = (event) => {

            //Getting the value of the clicked icon respective count
            let count = event.target.nextElementSibling.firstChild.textContent;

            //Getting total classes of the clicked content (i.e: Number of classes)
            let classCount = event.target.classList.length;
            count = parseInt(count);

            // If classes on the clicked icon are <=2 then it is unSelected first
                // So then it is not active, then when clicking it add class '.done' and increase count.
            // If > 2 then it is selected
                // So remove class and decrease count
            if (classCount <= 2) {
                count++;
            } else {
                count--;
            }
            // Removing and Adding class '.done'
            event.target.classList.toggle('done');
            // Insert the updated count to DOM
            event.target.nextElementSibling.firstChild.textContent = String(count);
        };

        return {
            init: () => {
                setUpEventListeners();
            }
        }
    }
)();


(() => {
    Controller.init();
})();