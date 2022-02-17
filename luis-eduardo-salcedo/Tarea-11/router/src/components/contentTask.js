export default function ContentTask({imgTask, task, descriptionImg}) {
    return(
        <>
        <article className="container__article">
            <h1>
                Task: {task}
            </h1>
            <img src={imgTask}  alt={descriptionImg} />
            </article>
        </>
    )
}