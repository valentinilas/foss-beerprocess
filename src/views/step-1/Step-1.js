export default {
    name: "Step1",
    mounted() {
        let links = document.querySelectorAll('.in-page-link');
        var interval = 500;

        [].forEach.call(links, function(link, index) {
            setTimeout(function() {
                link.classList.add('active');
            }, index * interval);
        });


    }
};