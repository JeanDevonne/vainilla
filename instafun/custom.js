var userFeed = new Instafeed({
    get: 'user',
    userId: '1428842010',
    accessToken: '1428842010.1677ed0.7d49e6d478114369ba4cc68db67663a2',
    limit: 12,
    sortBy: 'most-recent',
    resolution: 'low_resolution',
    template: '<a class="wow fadeInUp slower" target="_blank" href="{{link}}"><img src="{{image}}" /></a>'
});

userFeed.run();