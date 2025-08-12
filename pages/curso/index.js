useEffect(() => {
    const fetchTemario = async () => {
      // Obtener todos los temas del curso sin ordenar
      const { data, error } = await supabase.from('temario_curso').select('*');
      
      if (error) {
        console.error('Error fetching course topics:', error);
      } else {
        setTemario(data);
      }
      
      // Verificar si el usuario actual tiene acceso
      const { data: { session } } = await supabase.auth.getSession();
      let userHasAccess = false;
      if (session) {
        const { data: userAccess } = await supabase
          .from('users_with_access')
          .select('user_id')
          .eq('user_id', session.user.id)
          .single();
        if (userAccess) {
          userHasAccess = true;
        }
      }
      setHasAccess(userHasAccess);
      setLoading(false);
    };

    fetchTemario();
  }, []);
