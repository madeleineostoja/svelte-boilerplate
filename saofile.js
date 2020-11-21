module.exports = {
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: `Component name:`
    },
    {
      type: 'input',
      name: 'packageName',
      message: `Package name:`
    },
    {
      type: 'input',
      name: 'title',
      message: 'Human friendly title:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe it:'
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author:'
    },
    {
      type: 'input',
      name: 'githubOrg',
      message: 'GitHub org:'
    }
  ],
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
