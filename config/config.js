const config = {
    app_name: 'MoonShibs Rarity',
    app_description: 'MonnShibs Rarity Checker',
    collection_file_name: 'collection.json',
    collection_contract_address: '0xeF7F96198FA02864c7533a119561B4aCeC37B505',
    collection_name: 'MoonShibs',
    collection_description: 'A collection of 4 444 unique and randomly generated NFTs that feature a richly diverse and unique pool of rarity-powered traits that exist on EthereumPow. Holders can participate in nft drops, nft pass and many more.',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.sqlite',
    ga: 'G-BW69Z04YTP',
    main_og_image: 'https://ibb.co/cNJmrd6',
    item_path_name: 'MoonShibs',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: false
};

module.exports = config;