module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: `Component name:`
      },
      {
        name: 'packageName',
        message: `Package name:`
      },
      {
        name: 'title',
        message: 'Human friendly title:'
      },
      {
        name: 'description',
        message: 'Describe it:'
      },
      {
        name: 'author',
        message: 'Author:'
      },
      {
        name: 'githubOrg',
        message: 'GitHub org:'
      }
    ];
  },
  actions: [
    {
      type: 'add',
      files: '**'
    }
  ],

  async completed() {
    this.gitInit();
    await this.npmInstall();
    this.showProjectTips();
  }
};
