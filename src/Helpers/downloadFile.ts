export default async (url: string, name: string) => {
    try
    {
        const response = await fetch(url);
        const blob = await response.blob();
        
        const href = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = href;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
    }
    catch (error)
    {
        alert(error.message);
    }
}