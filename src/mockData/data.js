const data = [
  {
    id: 1,
    name: "root",
    isFolder: true,
    children: [
      {
        id: 2,
        name: "public",
        isFolder: true,
        children: [
          {
            id: 3,
            name: "index.html",
            isFolder: false
          }
        ]
      },
      {
        id: 4,
        name: "src",
        isFolder: true,
        children: [
          {
            id: 5,
            name: "mockData",
            isFolder: true,
            children: [
              {
                id: 6,
                name: "data.js",
                isFolder: false
              }
            ]
          },
          {
            id: 7,
            name: "App.js",
            isFolder: false
          },
          {
            id: 8,
            name: "index.js",
            isFolder: false
          },
          {
            id: 9,
            name: "styles.css",
            isFolder: false
          }
        ]
      },
      {
        id: 10,
        name: "package.json",
        isFolder: false
      }
    ]
  }
];

export { data };
