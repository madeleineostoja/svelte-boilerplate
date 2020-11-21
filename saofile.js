module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        type: 'text',
        message: `Component name:`
      },
      {
        name: 'packageName',
        type: 'text',
        message: `Package name:`
      },
      {
        name: 'title',
        type: 'text',
        message: 'Human friendly title:'
      },
      {
        name: 'description',
        type: 'text',
        message: 'Describe it:'
      },
      {
        name: 'author',
        type: 'text',
        message: 'Author:'
      },
      {
        name: 'githubOrg',
        type: 'text',
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
