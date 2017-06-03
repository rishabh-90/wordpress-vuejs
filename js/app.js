// create Post lIst Component
var postLists = Vue.component('post-list',{
    template: `<div class="row"><div class="mt-3 col-md-4" v-for="post in posts"><div class="card" style="width: 20rem;">
  <img class="card-img-top" v-bind:src="post.better_featured_image.media_details.sizes.medium.source_url" alt="Card image cap">
  <div class="card-block">
    <h4 class="card-title">{{post.title.rendered}}</h4>
    <p class="card-text">{{post.excerpt.rendered}}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div></div>`,
    data: function () {
        return {
            posts:'',
        }
    },
    mounted:function () {
        this.$http.get('./wp-json/wp/v2/posts').then(response => {

            // get body data
            this.posts = response.body;
            console.log(this.posts);
            this.posts.forEach(function (p1){
                console.log(p1);
            } );

    }, response => {
            console.log('Not Found');
        });
    }


});

//router
var router = new VueRouter({
    routes: [
        { path: '', component: postLists },
    ]
});

new Vue({
    el: '#app',
    router: router,

});