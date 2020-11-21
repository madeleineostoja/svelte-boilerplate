module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        type: 'input',
        message: `Component name:`
      },
      {
        name: 'packageName',
        type: 'input',
        message: `Package name:`
      },
      {
        name: 'title',
        type: 'input',
        message: 'Human friendly title:'
      },
      {
        name: 'description',
        type: 'input',
        message: 'Describe it:'
      },
      {
        name: 'author',
        type: 'input',
        message: 'Author:'
      },
      {
        name: 'githubOrg',
        type: 'input',
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
