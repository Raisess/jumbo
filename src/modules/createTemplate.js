module.exports = async (template, options) => {
  await template.generate({
    template: options.template,
    target: options.target,
    props: options.props
  });
}