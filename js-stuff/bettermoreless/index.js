document.addEventListener('DOMContentLoaded', () => {

    let expandBtns = document.querySelectorAll('.expand-btn');
    

    function collapse(element) {

        let elementHeight = element.scrollHeight;

        let elementTransition = element.style.transition;
        element.style.transition = '';

        requestAnimationFrame(() => {
            element.style.height = elementHeight + 'px';
            element.style.transition = elementTransition;

            // on the next frame (as soon as the previous style change has taken effect),
            // have the element transition to height: 0
            requestAnimationFrame(() => {
                element.style.height = 0 + 'px';
            });
        });

        element.setAttribute('data-collapsed', 'true');

    }

    function expand(element) {
        let elementHeight = element.scrollHeight;

        // have the element transition to the height of its inner content
        element.style.height = elementHeight + 'px';

        // when the next css transition finishes (which should be the one we just triggered)
        element.addEventListener('transitionend', function (e) {
            // remove this event listener so it only gets triggered once
            element.removeEventListener('transitionend', arguments.callee);

            // remove "height" from the element's inline styles, so it can return to its initial value
            element.style.height = null;
        });

        // mark the section as "currently not collapsed"
        element.setAttribute('data-collapsed', 'false');
    }



    expandBtns.forEach((expandBtn) => {

        expandBtn.addEventListener('click', (el) => {

         

            let isCollapsed = el.currentTarget.getAttribute('data-collapsed');
            let hiddenText = el.currentTarget.parentNode.previousElementSibling.firstElementChild;

            if (isCollapsed == 'true') {
                expand(hiddenText);
                hiddenText.classList.remove('collapsed');
                el.currentTarget.textContent = el.currentTarget.getAttribute('data-hidetext');
                el.currentTarget.setAttribute('data-collapsed', 'false');



            }
            else {
                collapse(hiddenText);
                hiddenText.classList.add('collapsed');
                el.currentTarget.textContent = el.currentTarget.getAttribute('data-showtext');
                el.currentTarget.setAttribute('data-collapsed', 'true');



            }

        });

    });




})