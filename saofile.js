function transformPropsString(props) {
  objectify = (prop) => {
    const description = prop.match(/\((.*)\)$/);
    let vals = prop.replace(/\(.*\)$/, '').split(':');

    return {
      name: vals[0],
      type: vals[1],
      description: !!description ? description[1] : 'No description'
    };
  };

  if (!props) {
    return;
  }

  return props
    .split(';')
    .map((propString) => propString.trim())
    .map(objectify);
}

module.exports = {
  prompts: [
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
    },
    {
      name: 'props',
      message: 'Props :: [prop]:[type];',
      filter: transformPropsString
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
